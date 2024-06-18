// Description: Providing hover events (descriptions) for each of the pieces

let narrationText = document.getElementById("narrationText");
let galleryPiecesList = document.getElementsByClassName("images");

galleryPiecesList[0].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "It's a frog(?) on my hand. It's fun to move your fingers around while this is on.";
});
galleryPiecesList[1].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I played Attack On Titan - Shinzou wo Sasageyo! It's Animenz's version.";
});
galleryPiecesList[2].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I did this on a whiteboard. The face is Pom Pom Purin, from Sanrio - a few 8th graders told me to draw this.";
});
galleryPiecesList[3].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "This song is from the anime Demonslayer, titled 'Kamado Tanjiro no Uta'. It's Animenz's version. Apologies, I had a bit of a cold while filming this.";
});
galleryPiecesList[4].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I drew these flowers over some rather traumatic scars I have on my arm.";
});
galleryPiecesList[5].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "Frank Sinatra's Fly Me to the Moon. Kassia's version. It was a fun, quick piee to learn!";
});