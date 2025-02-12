document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector("nav");

  // Scroll effect for navigation
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Scroll to top button
  const scrollTop = document.createElement("div");
  scrollTop.className = "scroll-top";
  scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollTop.classList.add("visible");
    } else {
      scrollTop.classList.remove("visible");
    }
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
});
