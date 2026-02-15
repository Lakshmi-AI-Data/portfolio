// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
});

// Close mobile nav after click
document.querySelectorAll(".mobile-link").forEach((a) => {
  a.addEventListener("click", () => (mobileNav.style.display = "none"));
});

// Active nav link on scroll
const sections = ["home", "about", "experience", "projects", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll(".nav-link"));

function setActive(id) {
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  },
  { root: null, threshold: 0.35 }
);

sections.forEach((s) => observer.observe(s));
