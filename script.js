const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const yearElement = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been sent.";
  contactForm.reset();
});

yearElement.textContent = new Date().getFullYear();
