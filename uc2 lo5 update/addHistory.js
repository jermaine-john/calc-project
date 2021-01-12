
  
    function mySubmitt() {
    var newLists = document.createElement("option");
    var a = document.getElementById("selectHistoryId");
    a.appendChild(newLists);


    
    var hist=firstNum + operation+secondNum+"=";
    var myhistory=hist + document.getElementById("result").value;
    newLists.innerHTML=myhistory;
    
    }
  