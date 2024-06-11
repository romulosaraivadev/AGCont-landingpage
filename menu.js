window.addEventListener('scroll', function() {
    var menu = document.querySelector('#menu');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
      menu.classList.add('menu-rolado');
    } else {
      menu.classList.remove('menu-rolado');
    }
  });

  window.addEventListener('scroll', function() {
    var imagem = document.getElementById('logo-agcont');
    var posicao = window.scrollY;

    if (posicao > 20) { // Altere o valor 500 para a posição em que deseja mudar a imagem
      imagem.src = 'imagem2.jpg'; // Altere 'imagem2.jpg' para o caminho da nova imagem
    } else {
      imagem.src = 'imagem1.jpg'; // Altere 'imagem1.jpg' para o caminho da imagem original
    }
  });