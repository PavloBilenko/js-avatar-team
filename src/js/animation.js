const containerHeader = document.querySelector(".header-container");

const listItemsHero = document.querySelectorAll('.hero-iteam');
const listItemsHeader = document.querySelectorAll('.header-item');
const listItemsFooter = document.querySelectorAll('.footer-item');
const listItemsMyProjects = document.querySelector('.load-more-btn')
const btnHero = document.querySelector('.rectangle');
const btnMyProjects = document.querySelectorAll('.my-projects-btn')
const btnReviews = document.querySelectorAll('.swiper-button-prev')
const btnReviewsNext = document.querySelectorAll('.swiper-button-next')
const btnWorkTogether = document.querySelector('.btn')
const listItemsWT = document.querySelectorAll('.link-address');

listItemsHero.forEach(item => {
  item.classList.add('line', 'universal-link-style');
});


listItemsHeader.forEach(item => {
  item.classList.add('line', 'universal-link-style');
});

listItemsMyProjects.classList.add('universal-link-style');

listItemsFooter.forEach(item => {
  item.classList.add('universal-link-style');
});

btnHero.classList.add('universal-btn-style');

btnMyProjects.forEach(item => {
  item.classList.add('universal-btn-style');
});

btnReviews.forEach(item => {
  item.classList.add('universal-btn-style');
});

btnReviewsNext.forEach(item => {
  item.classList.add('universal-btn-style');
});

btnWorkTogether.classList.add('universal-btn-style');

listItemsWT.forEach(item => {
  item.classList.add('line', 'universal-link-style');
});



