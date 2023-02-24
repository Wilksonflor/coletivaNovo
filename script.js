// -----------------------------------------
const menu = document.querySelector('header');

function activeScroll() {
    menu.classList.toggle('active', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);

// Parte para adicionar o menu fixo 
