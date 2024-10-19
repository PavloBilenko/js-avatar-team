export function setupFAQ() {
  const questionBoxes = document.querySelectorAll('.question-box');

  questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
      const questionElement = questionBox.parentElement;
      const answer = questionElement.querySelector('.answer');

      if (questionElement.classList.contains('open')) {
        // Закриття
        questionElement.classList.remove('open');
      } else {
        // Закриття інших елементів
        questionBoxes.forEach(otherBox => {
          const otherElement = otherBox.parentElement;
          otherElement.classList.remove('open');
        });
        // Відкриття поточного
        questionElement.classList.add('open');
      }
    });
  });

  // Автоматичне відкриття першого питання
  const firstQuestion = document.querySelector('.question-element');
  if (firstQuestion) {
    firstQuestion.classList.add('open'); // Відкриваємо перше питання
  }
}



