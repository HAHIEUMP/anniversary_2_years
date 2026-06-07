const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "LOVEYOUFOREVERANNIVERSARYHAPPY".split("");

let fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw(){
ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff4d6d";
ctx.font = fontSize+"px Arial";

for(let i=0;i<drops.length;i++){
let text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}
setInterval(draw,30);

// ELEMENTS
const text=document.getElementById("text");
const heart=document.getElementById("heart");
const thanks=document.getElementById("thanks");
const planet=document.getElementById("planet");
const letterBox=document.getElementById("letterBox");
const letterText=document.getElementById("letterText");
const question=document.getElementById("question");
const yes=document.getElementById("yes");
const final=document.getElementById("final");
const music=document.getElementById("music");

// MUSIC AUTO
window.addEventListener("click",()=>music.play(),{once:true});

function sleep(ms){
return new Promise(r=>setTimeout(r,ms));
}

// TYPEWRITER
async function typeText(text){
letterText.innerHTML="";
for(let i=0;i<text.length;i++){
letterText.innerHTML += text[i];
await sleep(22);
}
}

// RESET
function hideAll(){
text.innerText="";
heart.style.display="none";
thanks.style.display="none";
planet.style.display="none";
letterBox.style.display="none";
question.style.display="none";
yes.style.display="none";
final.style.display="none";
}

// FLOW
async function run(){

hideAll();

// intro
text.innerText="3"; await sleep(700);
text.innerText="2"; await sleep(700);
text.innerText="1"; await sleep(700);

text.innerText="HAPPY"; await sleep(900);
text.innerText="ANNIVERSARY"; await sleep(1000);
text.innerText="2 YEARS"; await sleep(1200);

// heart
heart.style.display="block";
thanks.style.display="block";
thanks.innerText="Cảm ơn em ❤️";

await sleep(2000);

text.innerText="";
heart.style.display="none";
thanks.style.display="none";

// 💌 PAPER LETTER
letterBox.style.display="block";

await typeText(`
Cảm ơn em đã cùng anh đi qua mọi cảm xúc.

Hai năm qua anh trân trọng từng nụ cười của em,
từng ánh mắt và cả những lúc giận hờn để hiểu nhau hơn.

Yêu em là điều đúng đắn nhất anh từng làm.

Anh không cần hoàn hảo,
chỉ cần có em bên cạnh.

Cảm ơn em vì đã luôn ở lại bên anh.

Dù sau này thế nào,
anh vẫn muốn ở cạnh em.
`);

await sleep(2000);

letterBox.style.display="none";

// PLANET
planet.style.display="block";

const imgs=document.querySelectorAll(".circle");
const radius=120;

imgs.forEach((img,i)=>{
const angle=(i/imgs.length)*Math.PI*2;
const x=Math.cos(angle)*radius;
const y=Math.sin(angle)*radius;

img.style.transform=`
translate(-50%,-50%)
translate3d(${x}px,${y}px,0)
`;
});

await sleep(7000);

planet.style.display="none";

// QUESTION
question.style.display="block";
yes.style.display="inline-block";
}

run();

// YES CLICK
yes.onclick=()=>{

question.style.display="none";
yes.style.display="none";

for(let i=0;i<80;i++){
let f=document.createElement("div");
f.innerHTML="✨";
f.style.position="absolute";
f.style.left=Math.random()*window.innerWidth+"px";
f.style.top=Math.random()*window.innerHeight+"px";
document.body.appendChild(f);
setTimeout(()=>f.remove(),2000);
}

setTimeout(()=>{
final.style.display="block";
},1000);
};
