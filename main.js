ScrollReveal().reveal('.showcase', { delay: 150 });
ScrollReveal().reveal('.nav-menu , .header , .nav-main , .location , .slide-wrap , .latest-news-body , .news', { delay: 100 });


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const goUp = document.querySelector("body > div > div.go-up > em");

goUp.addEventListener("click", (_e) => {
    scrollToTop();
});