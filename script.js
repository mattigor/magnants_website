// Esta função verifica qual seção está ativa na barra de navegação do site
function atualizarLinkAtivo() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (sectionTop <= window.scrollY && sectionBottom > window.scrollY) {
            link.classList.add("ativo");
        } else {
            link.classList.remove("ativo");
        }
    });
}
window.addEventListener("scroll", atualizarLinkAtivo);
window.addEventListener("load", atualizarLinkAtivo);

// Função que adiciona animação ao menu hamburguer
function rotateBars(bar) {
    bar.classList.toggle("change");
}
