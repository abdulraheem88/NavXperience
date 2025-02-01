// // Dark Mode Toggle
// const themeToggle = document.getElementById('theme-toggle');
// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
//   themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
// });


// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.display = i === index ? 'block' : 'none';
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds
// showSlide(currentSlide); // Show first slide

const textArray = [
  "We Build Modern Software Solutions",
  "We Build Web Development Projects",
  "We Build Mobile App Solutions",
  "We Build AI-Powered Projects"
];

const textElement = document.getElementById("changing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textArray[textIndex];
  if (!isDeleting) {
      textElement.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="typing"></span>';
      charIndex++;
      if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeText, 1500); // Pause before deleting
          return;
      }
  } else {
      textElement.innerHTML = currentText.substring(0, charIndex) + '<span class="typing"></span>';
      charIndex--;
      if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length; // Move to next text
      }
  }
  setTimeout(typeText, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 1000);
});



document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // GSAP Animations
  gsap.from(".hero h1", { opacity: 0, y: -30, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 30, duration: 1.5 });
  gsap.from(".hero .cta-button", { opacity: 0, scale: 0.8, duration: 1.8 });
});






document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const navbarLinks = document.getElementById("navbar-links");

  // Create Close Button
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("close-btn");

  // Toggle Navbar
  hamburger.addEventListener("click", () => {
      navbarLinks.classList.add("show");
      navbarLinks.appendChild(closeBtn);
  });

  // Close Navbar
  closeBtn.addEventListener("click", () => {
      navbarLinks.classList.remove("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!navbarLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navbarLinks.classList.remove("show");
      }
  });
});
