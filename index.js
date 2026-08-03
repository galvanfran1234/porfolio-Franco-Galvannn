// JavaScript simple para navegación suave (opcional)
      document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: "smooth" });
        });
      });
      
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alterna la clase 'active'
});
