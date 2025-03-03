//Attributes
const buttons = document.getElementById("buttons")
const button1 = document.getElementById("button1")
const button1dec = document.getElementById("button1Decoration")
const text = document.getElementById("text")
const button2 = document.getElementById("button2")
const button2dec = document.getElementById("button2Decoration")
let num = document.getElementById("num")
var count = 0
var loseClicks = 5

window.onload = function showTimesClicked() {
    num.textContent = "Clicks: " + count
}

//Determine amount of clicks done and execute events based off number of clicks
var callOnce1 = true
var callOnce2 = true
var callOnce10 = true
var callOnce15 = true
var callOnce20 = true

button1.addEventListener("click", function() {
    count++;
    num.textContent = "Clicks: " + count

if (count == 1 && callOnce1) {
    text.textContent = "do not press this again"
    callOnce1 = false
}

if (count == 2 && callOnce2) {
    text.textContent = "stop"
    callOnce2 = false
}


if (count == 10 && callOnce10) {
    text.textContent = "press the green button to win";
    button2.style.animation = "button2 .5s 1 linear forwards";
    button2dec.style.animation = "button2 .5s 1 linear forwards";
    button1.style.left = "60%"
    button1dec.style.left = "59.45%"
    callOnce10 = false
    }

    button2.addEventListener("click", function() {
        count = 0;
        num.textContent = "Clicks: " + count
        text.textContent = "you just lost all your clicks"
        button1.style.left = "44.85%"
        button1dec.style.left = "44.3%"
        button2.style.animation = "button2leave .5s 1 linear forwards";
        button2dec.style.animation = "button2leave .5s 1 linear forwards";
    }); 

    if (count == 15 && callOnce15 && (button1.style.left = "44.85%")) {
        num.textContent = "Clicks: " + count
        text.textContent = "youre boring"
        button1.style.left = "44.85%"
        button1dec.style.left = "44.3%"
        button2.style.animation = "button2leave .5s 1 linear forwards";
        button2dec.style.animation = "button2leave .5s 1 linear forwards";
    }

    if (count == 20 && callOnce20) {
        text.textContent = "you cant catch me"
        button1.style.left = "76.85%"
        button1dec.style.left = "76.3%"
        button1.style.top = "70%"
        button1dec.style.top = "70.5%"
    }

    if (count == 21 && callOnce20) {
        text.textContent = "you cant catch me"
        button1.style.left = "16.85%"
        button1dec.style.left = "16.3%"
        button1.style.top = "50%"
        button1dec.style.top = "50.5%"
    }
});

