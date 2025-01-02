const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute("href");

    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  });
});

const navButton = document.getElementsByClassName('nav-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

navButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});