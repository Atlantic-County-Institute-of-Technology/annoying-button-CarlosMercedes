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
var callOnce15second = true
var callOnceTransmission = false
var waitTime = false
var timeoutVar = true
var animationVar = true
var callOnce30 = true
var callOnce31 = true
var callOnce40 = true
var callOnce50 = true
var callOnce60 = true
var callOnce70 = true

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
        callOnce15second = false
    }); 

    if (count == 20 && callOnce15second == false) {
        callOnceTransmission = true
    }

    if (count == 15 && callOnce15second) {
        num.textContent = "Clicks: " + count
        text.textContent = "youre boring"
        button1.style.left = "44.85%"
        button1dec.style.left = "44.3%"
        button2.style.animation = "button2leave .5s 1 linear forwards";
        button2dec.style.animation = "button2leave .5s 1 linear forwards";
        callOnceTransmission = true
    }


    if (count == 20 && callOnceTransmission) {
        text.textContent = "you cant catch me"
        button1.style.left = "76.85%"
        button1dec.style.left = "76.3%"
        button1.style.top = "70%"
        button1dec.style.top = "70.5%"
    }

    if (count == 21 && callOnceTransmission) {
        button1.style.left = "16.85%"
        button1dec.style.left = "16.3%"
        button1.style.top = "50%"
        button1dec.style.top = "50.5%"
    }

    if (count == 22 && callOnceTransmission) {
        button1.style.left = "42.85%"
        button1dec.style.left = "42.3%"
        button1.style.top = "30%"
        button1dec.style.top = "30.5%"
    }

    if (count == 23 && callOnceTransmission) {
        text.textContent = "you still cant catch me"
        button1.style.left = "50.85%"
        button1dec.style.left = "50.3%"
        button1.style.top = "20%"
        button1dec.style.top = "20.5%"
    }

    if (count == 24 && callOnceTransmission) {
        button1.style.left = "60.85%";
        button1dec.style.left = "60.3%";
        button1.style.top = "70%";
        button1dec.style.top = "70.5%";
        button2.style.animation = "button2 .5s 1 linear forwards";
        button2dec.style.animation = "button2 .5s 1 linear forwards";
        button2.style.left = "30.85%";
        button2dec.style.left = "30.3%";
        button2.style.top = "60%";
        button2dec.style.top = "60.5%";
        waitTime = true
    }

    if (waitTime) {
        button2.addEventListener("click", function() {
                count = 15;
                num.textContent = "Clicks: " + count
                text.textContent = "you just lost some clicks (again)"
                button1.style.left = "44.85%"
                button1dec.style.left = "44.3%"
                button1.style.top = "30%"
                button1dec.style.top = "30.53%"
                button1.style.animation = "button2 .5s 1 linear forwards";
                button1dec.style.animation = "button2 .5s 1 linear forwards";
                button2.style.animation = "button2leave .5s 1 linear forwards";
                button2dec.style.animation = "button2leave .5s 1 linear forwards";
                button2.style.display = "none";
                button2dec.style.display = "none";
                callOnce15second = true
        }); 
    }

    if (count == 25 && callOnce15second == true) {
        text.textContent = "youre learning"
        button1.style.left = "44.85%"
        button1dec.style.left = "44.3%"
        button1.style.top = "30%"
        button1dec.style.top = "30.53%"
        button2.style.animation = "button2leave .5s 1 linear forwards";
        button2dec.style.animation = "button2leave .5s 1 linear forwards";
        waitTime = false
    }
    if (count == 30 && callOnce30) {
        text.textContent = "the green button is bad"

        let animation = button1.style.animation = "orbit 5s infinite linear";
        let animation2 = button1dec.style.animation = "orbit 5s infinite linear";
        const animationid = window.requestAnimationFrame(animation, animation2)
        }

        button1.addEventListener("click", function() {
            window.cancelAnimationFrame(animationid)

        }); 
    

    if (count == 40 && callOnce40) {
        callOnce40 = false
    }

    if (count == 50 && callOnce50) {
        text.textContent = "never trust the green button"
        callOnce50 = false
    }

    if (count == 60 && callOnce60) {
        text.textContent = "never CLICK the green button"
        callOnce60 = false
    }

    if (count == 70 && callOnce70) {
        text.textContent = "the green button is evil"
        callOnce70 = false
    }
    
});

