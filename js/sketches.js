// Desciption: Providing unique hover events (descriptions) for each of the pieces

let narrationText = document.getElementById("narrationText");
let galleryPiecesList = document.getElementsByClassName("images");

// is this loopable
galleryPiecesList[0].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "This is a cow shooting a laser out of its stomach. It's my favourite sketch. It's also sponsored by PETA - according to the drawing.";
});
galleryPiecesList[1].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "A friend asked me to draw her as a mushroom. She has a bubbly personality, types in capitals all the time, and is nicknamed 'Will'.";
});
galleryPiecesList[2].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "'The gronch - he s[h]teal the pre[s]ent (oh no).' - Coming to theaters July 7th! I do actually think that playing around with body structure is a good drawing exercise.";
});
galleryPiecesList[3].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I drew this for a CLN4U assignment, explaining the process of a criminal trial. This particular drawing was displayed for the section about lawyers presenting their cases against each other.";
});