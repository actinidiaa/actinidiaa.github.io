// Description: Enabling the info screen to pop up / disappear

let screenShade = document.getElementById('screenDarken');
let infoScreen = document.getElementById('infoScreen');

function showPageDescription() {
    screenShade.style.display = "block";
    infoScreen.style.display = "block";
    setTimeout(raiseOpacity, 1100); // Satan messed with my code while I was asleep and now this line is necessary. The elements must first be displayed as blocks, and then a second transition must take place after 1.1s (the transition time set in css) seconds. I would find a better solution if I had time. Too bad!
    function raiseOpacity() {
        screenShade.style.opacity = "1";
        infoScreen.style.opacity = "1";
        infoScreen.style.top = "20%";
    }
}

function hideInfo() {
    screenShade.style.opacity = "0";
    infoScreen.style.opacity = "0";
    infoScreen.style.top = "5%";

    setTimeout(removeDisplay, 1100);  // same reason as above 
    function removeDisplay() {
        screenShade.style.display = "none";
        infoScreen.style.display = "none";
    }
}