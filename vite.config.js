import { defineConfig } from 'vite'; // Импортирование функции defineConfig
import { glob } from 'glob'; // Импорт glob для динамической загрузки HTML-файлов
import injectHTML from 'vite-plugin-html-inject'; // Плагин для инъекции HTML
import FullReload from 'vite-plugin-full-reload'; // Плагин для полной перезагрузки при изменениях
import SortCss from 'postcss-sort-media-queries'; // Плагин для сортировки медиа-запросов

export default defineConfig(({ command }) => {
  return {
    // Определение глобальных переменных в зависимости от команды запуска
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    // Установка корневой директории на 'src'
    root: 'src',

    // Настройки сборки
    build: {
      sourcemap: true, // Включение source maps для отладки
      rollupOptions: {
        // Динамическая загрузка всех HTML-файлов
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            // Все зависимости из node_modules собираются в отдельный чанковый файл "vendor"
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            // Если название чанка 'commonHelpers', оно будет переименовано в commonHelpers.js
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js'; // Для остальных файлов используется шаблон [name].js
          },
          assetFileNames: assetInfo => {
            // Настройка для HTML-файлов
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]'; // Для HTML файлов
            }
            return 'assets/[name]-[hash][extname]'; // Для остальных ресурсов, таких как изображения, стили
          },
        },
      },
      outDir: '../dist', // Директория вывода после сборки
      emptyOutDir: true, // Очистка директории перед каждой сборкой
    },

    // Подключаемые плагины
    plugins: [
      injectHTML(), // Плагин для инъекции HTML
      FullReload(['./src/**/*.html']), // Перезагрузка при изменении HTML-файлов
      {
        postcss: {
          plugins: [
            SortCss({
              sort: 'mobile-first', // Сортировка медиа-запросов: "мобильный приоритет"
            }),
          ],
        },
      },
    ],
  };
});
