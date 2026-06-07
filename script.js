// ===== MATRIX =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "LOVEYOUFOREVERHAPPYANNIVERSARY";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width/fontSize;

let drops = Array(Math.floor(columns)).fill(1);

function draw(){
ctx.fillStyle="rgba(0,0,0,0.07)";
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

// ===== MUSIC (fix browser block) =====
document.body.addEventListener("click",()=>{
document.getElementById("music").play();
});

// ===== CLICK FLOW =====
let step = 0;

document.body.addEventListener("click",next);

function next(){

step++;

// intro
if(step==1){
document.getElementById("intro").style.opacity=1;
}

// countdown
if(step==2){
startCountdown();
}

// stage text
if(step==6){
document.getElementById("stageText").innerText="HAPPY";
}
if(step==7){
document.getElementById("stageText").innerText="ANNIVERSARY";
}
if(step==8){
document.getElementById("stageText").innerText="2 YEARS";
}

// heart
if(step==9){
document.getElementById("heart").style.display="block";
}

// letter
if(step==10){
document.getElementById("letter").style.display="block";
typeWriter("Cảm ơn em vì đã đến bên anh... 2 năm qua thật đẹp ❤️");
}

// gallery
if(step==11){
document.getElementById("gallery").style.display="block";
}
}

// ===== COUNTDOWN =====
function startCountdown(){
let c = 3;

let cd = setInterval(()=>{
document.getElementById("countdown").innerText = c;
c--;

if(c<0){
clearInterval(cd);
document.getElementById("countdown").innerText="";
}
},1000);
}

// ===== TYPE EFFECT =====
function typeWriter(text){
let i=0;
let el = document.getElementById("typing");

let t = setInterval(()=>{
el.innerHTML += text[i];
i++;

if(i>=text.length){
clearInterval(t);
}
},50);
}
