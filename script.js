const targetDate = new Date("March 21, 2026 00:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();
const distance = targetDate - now;

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("hours").innerHTML = hours.toString().padStart(2,'0');
document.getElementById("minutes").innerHTML = minutes.toString().padStart(2,'0');
document.getElementById("seconds").innerHTML = seconds.toString().padStart(2,'0');

if(distance <= 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML = "🎉 It's Time!";

setTimeout(()=>{
window.location.href = "surprise.html";
},2000);

}

},1000);