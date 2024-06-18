// Description: randomized rotation, background (.stickyNote) colors, and placement on notes for each of the drawings

let colorChoices = ["rgb(204, 108, 231)", "rgb(251, 214, 67)", "rgb(107, 167, 241)", "rgb(90, 244, 97)"];
let stickyNotesList = document.getElementsByClassName("stickyNote");
let pins = document.getElementsByClassName("pins");

for (i = 0; i < stickyNotesList.length; i++) {
    randomColorPicker = Math.floor(Math.random() * 4);
    stickyNotesList[i].style.backgroundColor = `${colorChoices[randomColorPicker]}`;
    // randomizes the color of the sticky notes

    let randX = (Math.random() * 9) + 1;
    let randY = (Math.random() * 9) + 1;
    // The amount that each of the images are offset by - between 1% and 8% (to the right or bottom, NOT top or left) 

    galleryPiecesList[i].style.top = `${randY}%`;
    galleryPiecesList[i].style.left = `${randX}%`;

    let randRotateStickyNote = (Math.random() * 6) * ((2 * Math.floor(Math.random() * 2)) - 1);
        // random rotation value (-5 to 5 degrees) of the sticky notes containing each image 
    let randRotateGalleryPiece = (Math.random() * 6) * ((2 * Math.floor(Math.random() * 2)) - 1);
        // random rotation value (-5 to 5 degrees) of the images
    let randRotatePin = (Math.random() * 30);
        // random rotation value (0 to 30 degrees) of the pins holding up the images

    galleryPiecesList[i].style.rotate = `${randRotateGalleryPiece}deg`;
    stickyNotesList[i].style.rotate = `${randRotateStickyNote}deg`;
    pins[i].style.rotate = `${randRotatePin}deg`;    
}