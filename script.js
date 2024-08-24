const btn = document.querySelector("button");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const body = document.body
const num = document.querySelectorAll(".clock label span");
console.log(num)
window.addEventListener("load",function(){
    updateTime()
})

function updateTime(){
    const now = new Date();
    secToDeg = (now.getSeconds() / 60) * 360;
    MinToDeg = (now.getMinutes() / 60) * 360;
    hrToDeg = (now.getHours() / 12) * 360;

    second.style.transform = `rotate(${secToDeg}deg)`;
    minute.style.transform = `rotate(${MinToDeg}deg)`;
    hour.style.transform = `rotate(${hrToDeg}deg)`;

}
setInterval(updateTime,1000)

btn.addEventListener("click",function(){
   body.classList.toggle("dark");
   if(body.classList.contains("dark")){
    btn.textContent = "Light mode"
   }else{
    btn.textContent = "Dark mode"
   }
})