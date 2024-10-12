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
