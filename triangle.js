var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var WM = document.querySelector("#winMsg");
var LM = document.querySelector("#losMsg");
var EM = document.querySelector("#errMsg");
var submitBtn = document.querySelector("#sumBtn");

submitBtn.addEventListener("click", validateinputs);

function validateinputs() {
    var A1 = Number(angle1.value);
    var A2 = Number(angle2.value);
    var A3 = Number(angle3.value);
    var SOA = 0;   
    if(A1 === 0 || A1 === null || A2 === 0 || A2 === null || A3 === 0 || A3 === null) {
         EM.style.display = "block";
         WM.style.display = "none";
         LM.style.display = "none";
     } else {
     SOA = sumOfAnglesISTriangle(A1,A2,A3);   
    }
    if(SOA === true) {
     WM.style.display = "block";
     LM.style.display = "none";
     EM.style.display = "none";
    } else {
     LM.style.display = "block";
     WM.style.display = "none";
    }
 }
 function sumOfAnglesISTriangle(a1,a2,a3) {
     var sum = Number(a1) + Number(a2) + Number(a3);
     if(sum === 180) {
         return true
     } else {
         return false
     }
 }
