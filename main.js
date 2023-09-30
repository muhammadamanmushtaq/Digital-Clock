(function () {   const date = new Date();
let todayDate= date.toDateString();
document.getElementById("div1").innerHTML=todayDate;
}) ();

function startClock1(){
  document.getElementById("div2").innerHTML = new Date().toLocaleTimeString();
}
 let interval;
function startClock(){
  if(!interval)
    interval = setInterval(startClock1,1000);
}
function stopClock(){
  clearInterval(interval)
  interval=null
}