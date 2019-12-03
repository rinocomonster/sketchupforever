var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("hitung").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("hitung").innerHTML = "hhh"
  }
}, 1500);
