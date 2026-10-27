// JavaScript para navegación suave y menú móvil interactivo
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Navegación suave y auto-cierre del menú móvil
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Cerrar menú móvil si está desplegado
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});
