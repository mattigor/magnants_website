// Esta função verifica qual seção está ativa na barra de navegação do site
function atualizarLinkAtivo() {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach((link) => {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (
          section.offsetTop <= window.scrollY &&
          section.offsetTop + section.offsetHeight > window.scrollY
      ) {
          link.classList.add('ativo'); // adiciona a classe .ativo, onde está o background laranja
      } else {
          link.classList.remove('ativo');
      }
  });
}
window.addEventListener('scroll', atualizarLinkAtivo);
window.addEventListener('load', atualizarLinkAtivo);

// Função que adiciona animação ao menu hamburguer
function rotateBars(bar) {
    bar.classList.toggle("change");
}
