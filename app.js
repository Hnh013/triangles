

var calcArea = document.querySelector("#calcarea");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaErr = document.querySelector("#errorMsg");
var areaMsg = document.querySelector("#areaMsg");
calcArea.addEventListener("click", calculateArea);



ques1sub.addEventListener("click", OneSubmit);
var AM = document.querySelector("#areaMsg");



function calculateArea() {
    var b = Number(base.value);
    var h = Number(height.value);

    if (b < 0 || h < 0 || b === 0 || h === 0 || b === null || h === null) {
    areaMsg.style.display = "none";
    areaErr.style.color = "red";
    areaErr.style.display = "block";
    } else {
    var a = 0.5 * b * h;
    areaErr.style.display = "none";
    areaMsg.style.display = "block";
    areaMsg.innerText = "The Area Is " + a + " sq. Units";
    }
}



