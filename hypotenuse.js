
var calcHypo = document.querySelector("#hypo");
var hbase = document.querySelector("#b");
var perpendicular = document.querySelector("#perpendicular");
var hErr = document.querySelector("#herrorMsg");
var hMsg = document.querySelector("#hypoMsg");
calcHypo.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
    var b = Number(hbase.value);
    var p = Number(perpendicular.value);

    if (b < 0 || p < 0 || b === 0 || p === 0 || b === null || p === null) {
    hMsg.style.display = "none";
    hErr.style.color = "red";
    hErr.style.display = "block";
    } else {
    var h = Math.sqrt((b*b)+(p*p));
    hErr.style.display = "none";
    hMsg.style.display = "block";
    hMsg.innerText = "The Hypotenuse Is " + h + " Units";
    }
}