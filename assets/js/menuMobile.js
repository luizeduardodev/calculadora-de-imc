/* Função para abrir o menu mobile */
const BtnMobile = document.getElementById('btn-mobile');

BtnMobile.addEventListener("click", (e) => {
    if(e.type === "touchstart"){
        e.preventDefault();
    }

    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    //const active = nav.classList.contains('active');
});

//Função para fechar o menu assim que clicar em um link do menu;
const navLink = document.querySelectorAll('.nav__link');
const clicarFora = document.getElementById('main');

const linkAction = () => {
    const navMenu = document.getElementById("nav");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));
clicarFora.addEventListener("click", linkAction);