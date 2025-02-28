const button1 = document.getElementById("button1")
const text = document.getElementById("text")

//Animation for when you click and hold, and for when you let go
function clickhold() {
    button1.style.animation="clickhold .1s 1 linear forwards";
}
function clickleave() {
    button1.style.animation="clickleave .5s 1 linear reverse";
}
button1.addEventListener("mousedown", clickhold);
button1.addEventListener("mouseup", clickleave);

function changeText1() {
    text.textContent = "do not press this again"
}

button1.addEventListener("click", changeText1);

