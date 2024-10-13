// faq.js

export function setupFAQ() {
  // Select all elements with the class 'question-box'
  const questionBoxes = document.querySelectorAll('.question-box');

  // Event listener for each question box
  questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
      const questionElement = questionBox.parentElement; // Get the parent element (.question-element)
      const answer = questionElement.querySelector('.answer'); // Get the associated answer element

      // Toggle the visibility of the clicked question's answer
      answer.style.display =
        answer.style.display === 'block' ? 'none' : 'block';
      questionElement.classList.toggle('open'); // Add/remove the open class for styling

      // Close other open elements
      questionBoxes.forEach(otherBox => {
        const otherElement = otherBox.parentElement;
        if (otherElement !== questionElement) {
          otherElement.classList.remove('open');
          otherElement.querySelector('.answer').style.display = 'none';
        }
      });
    });
  });

  // Automatically expand the first question on page load
  const firstQuestion = document.querySelector('.question-element'); // Select the first question element
  if (firstQuestion) {
    const firstAnswer = firstQuestion.querySelector('.answer');
    firstAnswer.style.display = 'block'; // Make the answer visible
    firstQuestion.classList.add('open'); // Apply the open class
  }
}

