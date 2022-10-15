ScrollReveal().reveal('.showcase', { delay: 150 });
ScrollReveal().reveal('.nav-menu , .header , .nav-main , .location , .slide-wrap , .latest-news-body , .news , .go-up ', { delay: 100 });


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const goUp = document.querySelector("body > div > div.go-up > em");

goUp.addEventListener("click", () => {
    scrollToTop();
});


const goDown = document.querySelector("#contactos > strong")

goDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

