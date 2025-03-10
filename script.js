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
var firstButton2 = true
var callOnceTransmission = false
var waitTime = false
var timeoutVar = true
var animationVar = true
var callOnce30 = true
var callOnce31 = true
var callOnce35 = true

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
        firstButton2 = false
    }); 

    if (count == 20 && callOnce15second == false) {
        callOnceTransmission = true
    }

    if (count == 15 && callOnce15second && firstButton2) {
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
        text.textContent = "the green button is bad";
        button2.style.animation = "button2 .5s 1 linear forwards";
        button2dec.style.animation = "button2 .5s 1 linear forwards";

        button2.style.left = "30%"
        button2.style.top = "30%"

        button2dec.style.left = "29.45%"
        button2dec.style.top = "30.5%"

        button1.style.left = "60%"
        button1dec.style.left = "59.45%"
        }

    if (count == 31) {
        text.textContent = "it is not here to help you";

        //button1.style.left = "55%"
        //button1dec.style.left = "54.45%"

        button1.style.top = "35%"
        button1dec.style.top = "35.5%"

        button1.style.width = "180px"
        button1.style.height = "180px"

        button1dec.style.width = "200px"
        button1dec.style.height = "200px"

        button2.style.width = "240px"
        button2.style.height = "240px"

        button2dec.style.width = "260px"
        button2dec.style.height = "260px"

    }

    if (count == 32) {
        text.textContent = "never trust the green button"
        //button1.style.left = "55.85%"
        //button1dec.style.left = "55.3%"

        button1.style.top = "40%"
        button1dec.style.top = "40.5%"

        button1.style.width = "160px"
        button1.style.height = "160px"

        button1dec.style.width = "180px"
        button1dec.style.height = "180px"

        button2.style.width = "260px"
        button2.style.height = "260px"

        button2dec.style.width = "280px"
        button2dec.style.height = "280px"

    }

    if (count == 33) {
        text.textContent = "never CLICK the green button"
        button2.style.animation = "button2 .5s 1 linear forwards";
        button2dec.style.animation = "button2 .5s 1 linear forwards";

        //button1.style.left = "55.85%"
        //button1dec.style.left = "55.3%"

        button1.style.top = "40%"
        button1dec.style.top = "40.5%"

        button1.style.width = "110px"
        button1.style.height = "110px"

        button1dec.style.width = "125px"
        button1dec.style.height = "125px"

        button2.style.width = "310px"
        button2.style.height = "310px"

        button2dec.style.width = "330px"
        button2dec.style.height = "330px"
    }

    if (count == 34) {
        text.textContent = "the green button is evil"
        button1.style.left = "59.80%"

        button1.style.top = "40.3%"
        button1dec.style.top = "40.5%"

        button1.style.width = "45px"
        button1.style.height = "45px"

        button1dec.style.width = "50px"
        button1dec.style.height = "50px"

        button2.style.width = "800px"
        button2.style.height = "800px"

        button2dec.style.width = "825px"
        button2dec.style.height = "825px"

        button2.style.left = "10%"
        button2.style.top = "10%"

        button2dec.style.left = "9.45%"
        button2dec.style.top = "10.5%"
    
} 

    if (count == 34) {
    text.textContent = "the green button is evil"
    button1.style.left = "59.80%"

    button1.style.top = "40.3%"
    button1dec.style.top = "40.5%"

    button1.style.width = "45px"
    button1.style.height = "45px"

    button1dec.style.width = "50px"
    button1dec.style.height = "50px"

    button2.style.width = "800px"
    button2.style.height = "800px"

    button2dec.style.width = "825px"
    button2dec.style.height = "825px"

    button2.style.left = "10%"
    button2.style.top = "10%"

    button2dec.style.left = "9.45%"
    button2dec.style.top = "10.5%"
    callOnce30 = false
    } 

    if (count == 35 && callOnce35) {
       button1.removeEventListener("click", function() {

       })
        text.textContent = "find the way to make the count go up"

        button1.style.left = "44.85%"
        button1dec.style.left = "44.3%"

        button1.style.top = "30%"
        button1dec.style.top = "30.53%"

        button1.style.width = "200px"
        button1.style.height = "200px"
    
        button1dec.style.width = "220px"
        button1dec.style.height = "220px"

        button2.style.animation = "button2leave .5s 1 linear forwards";
        button2dec.style.animation = "button2leave .5s 1 linear forwards";

        button2.style.display = "none"

        let keylog = [];
        document.onkeydown = function (e) {
            keylog.push("click");
            alert("keylog");
        };
        } 
});

