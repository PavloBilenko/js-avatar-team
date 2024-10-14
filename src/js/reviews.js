let swiper;

const initializeSwiper = () => {
    swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: 1, 
        

        breakpoints: {
            768: { 
                slidesPerView: 2,
                spaceBetween: 12,
                
                
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        mousewheel: {
            invert: false,
        },
        on: {
            reachEnd: () => {
                document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
            },
            reachBeginning: () => {
                document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
            },
            slideChange: () => {
                switchNavigationButtons();
            },
        },
    });

    switchNavigationButtons(); 
};

const loadComments = () => {
    fetch('https://portfolio-js.b.goit.study/api/reviews') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(comments => {
            const commentsList = document.getElementById('comments-list');
            commentsList.innerHTML = ''; 

            if (comments.length === 0) {
                document.getElementById('error-message').style.display = 'block'; 
                return;
            } else {
                document.getElementById('error-message').style.display = 'none'; 
            }

            comments.forEach(comment => {
                const slide = document.createElement('div'); 
                slide.classList.add('swiper-slide'); 

                slide.innerHTML = `
                    <div class="comment-container">
                        <p class="review-comment">${comment.review}</p> 
                        <div class="comment-user">
                            <img class="comment-user-photo" src="${comment.avatar_url}" alt="${comment.author} Photo"> 
                            <p class="comment-user-name">${comment.author}</p> 
                        </div>
                    </div>
                `;
                commentsList.appendChild(slide);
            });

            swiper.update(); 
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
            document.getElementById('error-message').style.display = 'block'; 
        });
};

function switchNavigationButtons() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    if (swiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
    } else {
        prevButton.classList.remove('swiper-button-disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
    } else {
        nextButton.classList.remove('swiper-button-disabled');
    }
}

window.onload = () => {
    initializeSwiper(); 
    loadComments(); 
};

