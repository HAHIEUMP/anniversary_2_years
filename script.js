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

function draw() {
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

setInterval(draw, 30);

// =====================
// ELEMENTS
// =====================
const text = document.getElementById("text");
const heart = document.getElementById("heart");
const thanks = document.getElementById("thanks");
const planet = document.getElementById("planet");
const question = document.getElementById("question");
const yes = document.getElementById("yes");
const final = document.getElementById("final");
const music = document.getElementById("music");

// =====================
// MUSIC FIX
// =====================
window.addEventListener("click", () => {
  music.play();
}, { once: true });

// =====================
// FLOW
// =====================
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {

  text.innerText = "3";
  await sleep(800);

  text.innerText = "2";
  await sleep(800);

  text.innerText = "1";
  await sleep(800);

  text.innerText = "HAPPY";
  await sleep(1000);

  text.innerText = "ANNIVERSARY";
  await sleep(1200);

  text.innerText = "2 YEARS";
  await sleep(1500);

  heart.style.display = "block";
  thanks.style.display = "block";
  thanks.innerText = "Cảm ơn em vì đã đến bên anh ❤️";

  await sleep(2500);

  // hide intro
  text.innerText = "";
  heart.style.display = "none";
  thanks.style.display = "none";

  // =====================
  // 🌍 PLANET 3D GALLERY
  // =====================
  planet.style.display = "block";

  const imgs = document.querySelectorAll(".circle");
  const radius = 120;

  imgs.forEach((img, i) => {
    const angle = (i / imgs.length) * Math.PI * 2;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    const z = Math.sin(angle) * 40;

    img.style.transform = `
      translate(-50%, -50%)
      translate3d(${x}px, ${y}px, ${z}px)
      scale(${0.7 + (z + 40) / 120})
    `;
  });

  await sleep(8000);

  planet.style.display = "none";

  // =====================
  // QUESTION
  // =====================
  question.style.display = "block";
  yes.style.display = "inline-block";
}

run();

// =====================
// YES CLICK
// =====================
yes.onclick = () => {

  question.style.display = "none";
  yes.style.display = "none";

  firework();

  setTimeout(() => {
    final.style.display = "block";
  }, 1200);
};

// =====================
// FIREWORKS
// =====================
function firework() {
  for (let i = 0; i < 80; i++) {
    let f = document.createElement("div");
    f.innerHTML = "✨";
    f.style.position = "absolute";
    f.style.left = Math.random() * window.innerWidth + "px";
    f.style.top = Math.random() * window.innerHeight + "px";
    f.style.fontSize = "18px";

    document.body.appendChild(f);

    setTimeout(() => f.remove(), 2000);
  }
}
