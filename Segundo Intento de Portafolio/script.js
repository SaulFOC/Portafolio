let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll("section");
let navilinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navilinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toogle('sticky', window.scrollY > 100);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};


/*===== SCROLL REVEAL ANIMATION =====*/
ScrollReveal({
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contacto form',
 { origin: 'botton' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });


//Animacion par tipear diferentes textos
var typed = new Typed(".multiple-text", {
    strings: ["Programador Frontend" , "Streamer", "Creador de Contenido"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})