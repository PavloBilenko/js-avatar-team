const elementFooter = document.querySelector('.footer-copyright');

let Visible = function (target) {
  
  let targetPosition = window.pageYOffset + target.getBoundingClientRect().bottom;
  let windowPosition = window.pageYOffset + document.documentElement.clientHeight;
  
  if (windowPosition >= targetPosition) {
    console.log();
    elementFooter.classList.add('footer-animation');
    let deleyAnimation = document.querySelector('footer-animation');
    let computedStyle = window.getComputedStyle(elementFooter);
    let animationDuration = computedStyle.animationDuration;

    setTimeout(() => {
    elementFooter.classList.remove('footer-animation');
    }, parseFloat(animationDuration) * (animationDuration.includes('s') ? 1000 : 1));
  }
}

window.addEventListener('scroll', function() {
  Visible (elementFooter);
});

const highlight = document.createElement("div");
highlight.className = "highlight";

const container = document.querySelector(".container-footer");
container.append(highlight);

container.addEventListener("mousemove", function (e) {
    highlight.style.left = e.clientX - container.getBoundingClientRect().left + "px";
    highlight.style.top = e.clientY - container.getBoundingClientRect().top + "px";
});

// Отримуємо кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Відслідковуємо прокрутку сторінки
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Якщо сторінка прокручена більше ніж на 300px, показуємо кнопку
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Коли користувач натискає на кнопку, прокручуємо сторінку до верху
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавна прокрутка
    });
};
