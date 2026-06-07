// ===== MATRIX =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "LOVEYOUFOREVERANNIVERSARY";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width/fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function draw(){
ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff4d6d";
ctx.font = fontSize+"px Arial";

for(let i=0;i<drops.length;i++){
let text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.97){
drops[i]=0;
}
drops[i]++;
}
}
setInterval(draw,30);

// ===== ELEMENTS =====
const text = document.getElementById("text");
const heart = document.getElementById("heart");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const finalText = document.getElementById("finalText");

// ===== MUSIC =====
window.addEventListener("click",()=>{
document.getElementById("music").play();
},{once:true});

// ===== FLOW (FIXED SEQUENCE) =====
function sleep(ms){
return new Promise(r=>setTimeout(r,ms));
}

async function run(){

// 3 2 1 (GIỮ NGUYÊN)
text.innerText="3";
await sleep(1000);

text.innerText="2";
await sleep(1000);

text.innerText="1";
await sleep(1000);

// HAPPY
text.innerText="HAPPY";
await sleep(1200);

// ANNIVERSARY
text.innerText="ANNIVERSARY";
await sleep(1200);

// 2 YEARS
text.innerText="2 YEARS";
await sleep(1500);

// HEART
heart.style.display="block";
await sleep(1500);

// LETTER (KHÔNG MẤT TEXT TRÊN)
letter.style.display="block";
letter.innerHTML="Cảm ơn em đã đến bên anh...<br>2 năm qua rất đẹp ❤️";
await sleep(2500);

// GALLERY (CHẠY XONG MỚI QUA BƯỚC SAU)
gallery.style.display="block";
startSlider();
await sleep(6000);

// QUESTION (LUÔN Ở CUỐI)
question.style.display="block";
yesBtn.style.display="inline-block";
}

run();

// ===== SLIDER =====
let index=0;

function startSlider(){
setInterval(()=>{
index++;
if(index>2) index=0;
document.getElementById("slider").style.transform=`translateX(-${index*300}px)`;
},2000);
}

// ===== BUTTON FIX (KHÔNG MẤT) =====
yesBtn.onclick=function(){

question.style.display="none";
yesBtn.style.display="none";

finalText.style.display="block";

fireworks();
};

// ===== FIREWORKS =====
function fireworks(){
for(let i=0;i<80;i++){
let f=document.createElement("div");
f.innerHTML="✨";
f.style.position="absolute";
f.style.left=Math.random()*window.innerWidth+"px";
f.style.top=Math.random()*window.innerHeight+"px";
f.style.fontSize="20px";

document.body.appendChild(f);

setTimeout(()=>f.remove(),2000);
}
}
