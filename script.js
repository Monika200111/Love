document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");

  document.addEventListener("click", () => {
    if (music && music.paused) {
      music.play().catch(err => console.log(err));
    }
  }, { once: true });
});


// 💫 Card entrance animation
window.addEventListener("load", () => {
  document.querySelector(".card").classList.remove("hidden");
});

// 📸 Quote slideshow (5 seconds per image)
const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");
let isPaused = false;

// Show each quote for 5 seconds
setInterval(() => {
  if (isPaused) return;

  slide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 1200); // smooth fade time
}, 5000); // ⏱️ 5 seconds

// ⏸ Pause on hover (desktop)
slide.addEventListener("mouseenter", () => {
  isPaused = true;
});

slide.addEventListener("mouseleave", () => {
  isPaused = false;
});

// ⏸ Pause / Resume on tap (mobile)
slide.addEventListener("click", () => {
  isPaused = !isPaused;
});

// 💕 Floating hearts animation
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 600);
