//Attributes
const button1 = document.getElementById("button1")
const text = document.getElementById("text")
const circle = document.getElementById("circle")
let num = document.getElementById("num")
var count = 0
var loseClicks = 5

window.onload = function showTimesClicked() {
    num.textContent = "Clicks: " + count
}

//Animation for when you click and hold, and for when you let go
function clickhold() {
    button1.style.animation="clickhold .1s 1 linear forwards";
}
function clickleave() {
    button1.style.animation="clickleave .5s 1 linear forwards";
}
button1.addEventListener("mousedown", clickhold);
button1.addEventListener("mouseup", clickleave);

//Determine amount of clicks done and execute events based off number of clicks
button1.addEventListener("click", function() {
    count++;
    num.textContent = "Clicks: " + count

if (count == 1) {
    text.textContent = "do not press this again"
}

if (count == 2) {
    text.textContent = "stop"
}

if (count == 10) {
    text.textContent = "press the green button to win";
    circle.style.animation="circle .5s 1 linear forwards";
    }

    circle.addEventListener("click", function() {
        count = loseClicks;
        num.textContent = "Clicks: " + count
    });
});

