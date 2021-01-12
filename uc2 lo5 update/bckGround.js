var myColor = document.getElementById("main");
var colorr = ["green","yellow","pink"];
var counter = 0;
var calcStyle=document.getElementById("calc");
var b=""
function changeColor(){

    if( counter >= colorr.length)
    {
        counter = 0;

    }
  myColor.style.background = colorr[counter];
  b =counter++;
}

setInterval(changeColor, 500);
