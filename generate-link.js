var timeleft = 15;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Scroll down to get Download link"
    document.getElementById("btndownload").removeAttribute("style");
  }
}, 1500);
