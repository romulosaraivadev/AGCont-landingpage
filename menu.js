window.addEventListener('scroll', function() {
    var menu = document.querySelector('#menu');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20 && window.innerWidth > 768) {
      menu.classList.add('menu-rolado');
    } else {
      menu.classList.remove('menu-rolado');
    }
  });

  window.addEventListener('scroll', function() {
    var imagem = document.getElementById('logo-agcont');
    var posicao = window.scrollY;

    if (posicao > 20 && window.innerWidth > 768) { 
      imagem.src = 'img/logo-agcont-preta.svg'; 
    } else {
      imagem.src = 'img/logo-agcont.svg'; 
    }
  });
