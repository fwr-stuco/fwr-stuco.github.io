// Nav script
(function() {
  const menuBtn = document.getElementById('menu-button');
  const links = document.getElementById('nav-links');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
})();
