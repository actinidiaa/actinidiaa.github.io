// Description: Enabling the pop-up that appears at the bottom of the screen when hovering over images

let narratorBox = document.getElementById('narratorBox');
let galleryBox = document.querySelector("main");

galleryBox.addEventListener('mouseenter', popUpNarrator);   // Opening the "narration box" when hovering over <main>
narratorBox.addEventListener('mouseenter', popUpNarrator);  // ^also when hovering over the narration box itself, because the narrator box that subsequently pops up does NOT count as the "gallery".
galleryBox.addEventListener('mouseleave', removeNarrator);

function popUpNarrator() {
    narratorBox.style.bottom = "0";
}

function removeNarrator() {
    document.getElementById('narratorBox').style.bottom = "-20%";
}