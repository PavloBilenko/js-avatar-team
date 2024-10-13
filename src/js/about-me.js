document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

window.addEventListener('scroll', function() {
    const bioSection = document.querySelector('.bio');
    const bioPosition = bioSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (bioPosition < screenPosition) {
        bioSection.classList.add('appear');
    }
});
