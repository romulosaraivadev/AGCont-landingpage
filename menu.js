window.addEventListener('scroll', function() {
    var menu = document.querySelector('#menu');
    var menuMobile = document.querySelector ('.menu-mobile')
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20/* && window.innerWidth > 768*/) {
      menu.classList.add('menu-rolado')
      menuMobile.classList.add('menu-mobile-wt')
      menuMobile.classList.add('menu-mobile-wt::after')
      menuMobile.classList.add('menu-mobile-wt::before')
      
    } else {
      menu.classList.remove('menu-rolado')
      menuMobile.classList.remove('menu-mobile-wt')
      menuMobile.classList.remove('menu-mobile-wt::after')
      menuMobile.classList.remove('menu-mobile-wt::before')
      
    }
  });

  window.addEventListener('scroll', function() {
    var imagem = document.getElementById('logo-agcont');
    var posicao = window.scrollY;

    if (posicao > 20 /*&& window.innerWidth > 768*/) { 
      imagem.src = 'img/logo-agcont-preta.svg'; 
    } else {
      imagem.src = 'img/logo-agcont.svg'; 
    }
  });

  const hamburger = document.querySelector(".menu-mobile")
  const nav = document.querySelector('.nav-menu')
  const link = document.querySelector('link-menu')

  hamburger.addEventListener("click", () => nav.classList.toggle("active"))
  