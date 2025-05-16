const typedText = document.querySelector(".typed-text");
const words = ["Cool IT Graduate", "Web Developer", "Graphic Designer", "Creative Thinker"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 2000;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay + 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});
