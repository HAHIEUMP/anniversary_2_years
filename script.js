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

// ===== MUSIC =====
window.addEventListener("click",()=>{
document.getElementById("music").play();
});

// ===== FLOW =====
let text = document.getElementById("text");

function sleep(ms){
return new Promise(r=>setTimeout(r,ms));
}

async function run(){

// 3 2 1
text.innerText="3";
await sleep(1000);

text.innerText="2";
await sleep(1000);

text.innerText="1";
await sleep(1000);

// HAPPY
text.innerText="HAPPY";
await sleep(1000);

// ANNIVERSARY
text.innerText="ANNIVERSARY";
await sleep(1200);

// 2 YEARS
text.innerText="2 YEARS";
await sleep(1500);

// HEART
document.getElementById("heart").style.display="block";
await sleep(1500);

// LETTER
document.getElementById("letter").style.display="block";
document.getElementById("letter").innerHTML=
"Cảm ơn em đã đến bên anh...<br>2 năm qua rất đẹp ❤️";
await sleep(2500);

// GALLERY
document.getElementById("gallery").style.display="block";
startSlider();
await sleep(6000);

// QUESTION
document.getElementById("question").style.display="block";
document.getElementById("yesBtn").style.display="block";

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

// ===== YES BUTTON =====
document.getElementById("yesBtn").onclick=function(){

document.getElementById("question").style.display="none";
document.getElementById("yesBtn").style.display="none";

document.getElementById("finalText").style.display="block";

// simple fireworks
fireworks();
};

// ===== FIREWORKS SIMPLE =====
function fireworks(){
for(let i=0;i<50;i++){
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
