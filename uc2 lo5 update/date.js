var title = document.getElementById("ddate");
var d = new Date();
var day = d.getDay();
var arrayDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = arrayDay[day];
title.innerHTML= "Today is " + dayName;