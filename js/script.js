document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const themeToggle = document.getElementById("theme-toggle");

  // Toggle mobile nav visibility
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
  });

  // Theme switcher
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      document.documentElement.style.setProperty("--bg-color", "#1c1c1c");
      document.documentElement.style.setProperty("--text-color", "#e0e0e0");
      document.documentElement.style.setProperty("--accent-color", "#ff8c42");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#ffffff");
      document.documentElement.style.setProperty("--text-color", "#333333");
      document.documentElement.style.setProperty("--accent-color", "#4a90e2");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Existing nav toggle & theme switch...

  const form = document.getElementById("commentForm");
  const confirmMsg = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("hidden");
      confirmMsg.classList.remove("hidden");
    });
  }
});