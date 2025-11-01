// Mobile menu toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

// Typewriter effect
const text = "Welcome to NEXUS AI DIGITAL Internship!";
let index = 0;
const speed = 100;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
