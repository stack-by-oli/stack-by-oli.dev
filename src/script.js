//------------------------------------------------
// stack-by-oli.dev  |  Under Construction v1.0
// Developer: Oliver Groh
// Purpose: Simple fade-in animation trigger
//------------------------------------------------

// Wait for DOM to load before running animations
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  container.classList.add("fade-in");

  // Optional: interactive pulse effect when logo clicked
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    logo.classList.toggle("pulse");
  });
});

// Add pulse animation style dynamically (optional)
const style = document.createElement("style");
style.textContent = `
@keyframes pulseGlow {
  0%, 100% { filter: drop-shadow(0 0 10px var(--accent-cyan)); }
  50% { filter: drop-shadow(0 0 18px var(--accent-violet)); }
}

.logo.pulse {
  animation: pulseGlow 2s ease-in-out infinite;
}
`;
document.head.appendChild(style);
