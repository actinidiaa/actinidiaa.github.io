// Description: A text animation that slowly moves the text links around the page.


setInterval(textAnimation, 1000);
// Re-calls the textAnimation function every second.

textList = [document.getElementById("artworks"), document.getElementById("sketches"), document.getElementById("misc"), document.getElementById("biography"), document.getElementById("contact")];

offset = 5;
// The maximum amount of pixels that the links can move from their original position. Go on. Set it to 5000.

function textAnimation() {
    for (i of textList) {
        randX = Math.random() * offset * ((2 * Math.floor(Math.random() * 2)) - 1);
        randY = Math.random() * offset * ((2 * Math.floor(Math.random() * 2)) - 1); 
        // The second part of this calculation, "((2 * Math.floor(Math.random() * 2)) - 1)", returns either -1 or 1: so that the links can move in the opposite direction as well. It's simply here so that no extra if statements are needed to randomly multiply the numbers by -1.  

        i.style.top = `${randY}px`;
        i.style.right = `${randX}px`
        // Then, it repeats the calculations and edits for every element in the textList, which is every link on the page.
    }
}