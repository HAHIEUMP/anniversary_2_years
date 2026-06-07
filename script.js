// =====================
// MATRIX BACKGROUND
// =====================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "LOVEYOUFOREVERANNIVERSARYHAPPY";
letters = letters.split("");

let fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff4d6d";
  ctx.font = fontSize + "px Arial";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 30);

// =====================
// ELEMENTS
// =====================
const text = document.getElementById("text");
const heart = document.getElementById("heart");
const thanks = document.getElementById("thanks");
const circleBox = document.getElementById("circleBox");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const finalText = document.getElementById("final");
const music = document.getElementById("music");

// =====================
// MUSIC (fix autoplay policy)
// =====================
window.addEventListener("click", () => {
  music.play();
}, { once: true });

// =====================
// HELP FUNCTION
// =====================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =====================
// MAIN FLOW (AUTO RUN)
// =====================
async function run() {

  // 3 2 1
  text.innerText = "3";
  await sleep(800);

  text.innerText = "2";
  await sleep(800);

  text.innerText = "1";
  await sleep(800);

  // HAPPY
  text.innerText = "HAPPY";
  await sleep(1000);

  // ANNIVERSARY
  text.innerText = "ANNIVERSARY";
  await sleep(1200);

  // 2 YEARS
  text.innerText = "2 YEARS";
  await sleep(1500);

  // HEART + THANKS
  heart.style.display = "block";
  thanks.style.display = "block";
  thanks.innerText = "Cảm ơn em vì đã đến bên anh ❤️";

  await sleep(2500);

  // hide intro stage
  heart.style.display = "none";
  thanks.style.display = "none";
  text.innerText = "";

  // =====================
  // CIRCLE GALLERY (15 IMAGES)
  // =====================
  circleBox.style.display = "block";

  const imgs = document.querySelectorAll(".circle");

  // FIX: spread images evenly in circle
  imgs.forEach((img, i) => {
    const angle = (i / imgs.length) * 360;
    img.style.transform = `
      rotate(${angle}deg)
      translateY(-110px)
      rotate(-${angle}deg)
    `;
  });

  await sleep(8000);

  // hide gallery
  circleBox.style.display = "none";

  // =====================
  // QUESTION
  // =====================
question.style.display = "block";
  yesBtn.style.display = "inline-block";
}

run();

// =====================
// YES BUTTON
// =====================
yesBtn.onclick = () => {

  question.style.display = "none";
  yesBtn.style.display = "none";

  // FIREWORKS
  fireworkEffect();

  setTimeout(() => {
    finalText.style.display = "block";
    finalText.innerText = "Anh yêu em ❤️";
  }, 1200);
};

// =====================
// FIREWORK EFFECT
// =====================
function fireworkEffect() {
  for (let i = 0; i < 80; i++) {
    let f = document.createElement("div");
    f.innerHTML = "✨";
    f.style.position = "absolute";
    f.style.left = Math.random() * window.innerWidth + "px";
    f.style.top = Math.random() * window.innerHeight + "px";
    f.style.fontSize = "18px";
    f.style.zIndex = "999";

    document.body.appendChild(f);

    setTimeout(() => f.remove(), 2000);
  }
}
