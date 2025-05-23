function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
  

  function closeMenu() {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.hamburger');
  
    nav.classList.remove('active');
    burger.classList.remove('open');
  }

  document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.hamburger');
    
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
  