// =====================
// MATRIX
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

// =====================
// ELEMENTS
// =====================
const text = document.getElementById("text");
const heart = document.getElementById("heart");
const thanks = document.getElementById("thanks");
const planet = document.getElementById("planet");
const letterBox = document.getElementById("letterBox");
const letterText = document.getElementById("letterText");
const question = document.getElementById("question");
const yes = document.getElementById("yes");
const final = document.getElementById("final");
const music = document.getElementById("music");

// =====================
// MUSIC FIX (AUTO + FALLBACK)
// =====================
function playMusic(){
music.volume = 0.5;
let playPromise = music.play();

if(playPromise !== undefined){
playPromise.catch(()=>{
window.addEventListener("click",()=>music.play(),{once:true});
});
}
}
playMusic();

// =====================
// TYPEWRITER
// =====================
function sleep(ms){
return new Promise(r=>setTimeout(r,ms));
}

async function typeWriter(el,text){
el.innerHTML="";
for(let i=0;i<text.length;i++){
el.innerHTML += text[i];
await sleep(25);
}
}

// =====================
// FLOW RESET
// =====================
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

// =====================
// MAIN FLOW
// =====================
async function run(){

hideAll();

// 3-2-1
text.innerText="3"; await sleep(800);
text.innerText="2"; await sleep(800);
text.innerText="1"; await sleep(800);

text.innerText="HAPPY"; await sleep(900);
text.innerText="ANNIVERSARY"; await sleep(1100);
text.innerText="2 YEARS"; await sleep(1200);

// HEART + THANKS
heart.style.display="block";
thanks.style.display="block";
thanks.innerText="Cảm ơn em vì đã đến bên anh ❤️";

await sleep(2200);

// CLEAR
text.innerText="";
heart.style.display="none";
thanks.style.display="none";

// =====================
// LETTER (FIXED + TYPEWRITER)
// =====================
letterBox.style.display="block";
await typeWriter(letterText,`
Cảm ơn em đã cùng anh đi qua mọi cung bậc cảm xúc.

Nhìn lại 2 năm qua, anh càng trân trọng từng nụ cười,
từng cái ôm và cả những lúc giận hờn để hiểu nhau hơn.

Yêu em là điều đúng đắn nhất anh từng làm.

Hai năm trôi qua nhanh như chớp mắt,
vì lúc nào anh cũng hạnh phúc khi có em.

Anh không cần hoàn hảo,
chỉ cần tương lai luôn có em.

Cảm ơn em vì đã là hậu phương của anh.
Nụ cười em là bình yên của anh.

Anh tự hào vì được đồng hành cùng em.

Anh không hứa điều lớn lao,
nhưng anh hứa sẽ luôn nắm tay em thật chặt.

Giông bão ngoài kia anh tự lo được,
chỉ cần về nhà có em.

Cảm ơn em vì đã chọn ở lại.

Chúc mừng 2 năm của chúng ta ❤️
`);

await sleep(1500);

letterBox.style.display="none";

// =====================
// PLANET 3D
// =====================
planet.style.display="block";

const imgs=document.querySelectorAll(".circle");
const radius=120;

imgs.forEach((img,i)=>{
const angle=(i/imgs.length)*Math.PI*2;
const x=Math.cos(angle)*radius;
const y=Math.sin(angle)*radius;

img.style.transform=`
translate(-50%,-50%)
translate3d(${x}px,${y}px,0px)
`;
});

await sleep(8000);

planet.style.display="none";

// =====================
// QUESTION
// =====================
question.style.display="block";
yes.style.display="inline-block";
}

run();

// =====================
// YES CLICK
// =====================
yes.onclick=()=>{

question.style.display="none";
yes.style.display="none";

firework();

setTimeout(()=>{
final.style.display="block";
},1200);
};

// =====================
// FIREWORK
// =====================
function firework(){
for(let i=0;i<100;i++){
let f=document.createElement("div");
f.innerHTML="✨";
f.style.position="absolute";
f.style.left=Math.random()*window.innerWidth+"px";
f.style.top=Math.random()*window.innerHeight+"px";
f.style.fontSize="18px";
document.body.appendChild(f);

setTimeout(()=>f.remove(),2000);
}
}  
