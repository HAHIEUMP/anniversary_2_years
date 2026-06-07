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
const thanks = document.getElementById("thanks");
const circleBox = document.getElementById("circleBox");
const question = document.getElementById("question");
const yes = document.getElementById("yes");
const final = document.getElementById("final");

// ===== MUSIC =====
window.addEventListener("click",()=>{
document.getElementById("music").play();
},{once:true});

// ===== FLOW =====
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

async function run(){

// 3-2-1 + text
text.innerText="3"; await sleep(800);
text.innerText="2"; await sleep(800);
text.innerText="1"; await sleep(800);

text.innerText="HAPPY"; await sleep(1000);
text.innerText="ANNIVERSARY"; await sleep(1000);
text.innerText="2 YEARS"; await sleep(1200);

// HEART + THANKS
heart.style.display="block";
thanks.style.display="block";

await sleep(2000);

// ẨN HEART PHASE
heart.style.display="none";
text.innerText="";
thanks.style.display="none";

// CIRCLE GALLERY
circleBox.style.display="block";
await sleep(8000);

// QUESTION
circleBox.style.display="none";

question.style.display="block";
yes.style.display="inline-block";
}

run();

// ===== CLICK YES =====
yes.onclick=()=>{
question.style.display="none";
yes.style.display="none";

fireworks();

setTimeout(()=>{
final.style.display="block";
},1500);
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
