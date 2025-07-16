

 document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
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
  }
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






// Get references to the hamburger and nav-menu elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on the hamburger itself for animation
    hamburger.classList.toggle("active");
    // Toggle the 'active' class on the nav-menu to show/hide it
    navMenu.classList.toggle("active");
});

// Optional: Close the mobile menu when a nav link is clicked
// This is good for single-page applications or when navigating to a new section
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Ensure the menu is closed if the window is resized to desktop view
// This prevents the menu from staying open if resized from mobile to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) { // Match this breakpoint to your CSS media query
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});
