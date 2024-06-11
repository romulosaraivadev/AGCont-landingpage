window.addEventListener('scroll', function() {
    var menu = document.querySelector('#menu');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
      menu.classList.add('menu-rolado');
    } else {
      menu.classList.remove('menu-rolado');
    }
  });