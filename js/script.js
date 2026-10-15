// Toggle menu navbar di HP (Bootstrap sudah handle otomatis, ini cuma buat nutup menu setelah klik)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
});
