
/* ESTABLINT FUNCIÓ DE SCROLL-REVEAL */

ScrollReveal().reveal('.showcase', { delay: 150 });
ScrollReveal().reveal('.nav-menu , .header , .nav-main , .location , .slide-wrap , .latest-news-body , .news , .go-up ', { delay: 100 });

/* FUNCIÓ DEL BOTÓ GO-UP */

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* DEFININT VARIABLE GO-UP */

const goUp = document.querySelector("body > div > div.go-up > em");

/* APLICANT VARIABLE A LA FUNCIÓ */

goUp.addEventListener("click", () => {
    scrollToTop();
});

/* DEFININT VARIABLE GO-DOWN(BOTÓ CONTACTES) */

const goDown = document.querySelector("#contactos > strong");

/* DONANT-LI INSTRUCCIONS A LA FUNCIÓ GO-DOWN */

goDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

function ScrollToLatest(){
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'
    });
    
}

function inworkCAT(){
    swal({
    title:"En fora de servei",
    icon:"error",
    });
}

function inworkESP(){
    swal({
    title:"En fuera de servicio",
    icon:"error",
    });
}

const SpainSite = "../index.html";
const CatalanSite = "cat/index.html";

function ChangeLanguageToSpanish(){
    window.location.replace(SpainSite);
}

function ChangeLanguageToCatalan(){
    window.location.replace(CatalanSite);
}

