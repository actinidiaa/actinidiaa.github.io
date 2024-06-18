// Description: Providing hover events (descriptions) for each of the pieces

let narrationText = document.getElementById("narrationText");
let galleryPiecesList = document.getElementsByClassName("images");

// is this loopable
galleryPiecesList[0].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I made this for a friend of mine; She said she was having a hard time with school, though also liked elephants. The elephant's name is Dorothy. This is actually the first time I'd used color in a few months.";
});
galleryPiecesList[1].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I intended this to be quick lighting practice, but it turned into one of my favourite pieces. The right eye (from viewer perspective) was redrawn so many times that there's a rip through the paper around that spot.";
});
galleryPiecesList[2].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "A boy holding a jar of fireflies - inspired from Studio Ghibli's <i>Grave of the Fireflies</i>.";
});
galleryPiecesList[3].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "While complaining about how hard it is to put on symmetrical eyeliner, a friend challenged me to draw eyeliner wings. As if it didn't take me 5 years to learn to draw symmetrical eyes.";
});
galleryPiecesList[4].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "My favourite painting, from 2022. A recreation of a scene from Pokemon Platinum - where the fabled creature 'Giratina' confronts the antagonist on Spear Pillar.";
});

// blurring the dead body
let unblurButton = document.getElementById("unblurButton");
unblurButton.addEventListener('mouseenter', function() {
    narrationText.innerHTML = "(Gore warning - click to view)";
    unblurButton.style.backgroundColor = "rgba(0,0,0,0.4)";
});
unblurButton.addEventListener('mouseleave', function() {
    unblurButton.style.backgroundColor = "rgba(0,0,0,0)";
});
unblurButton.addEventListener('click', function() {
    unblurButton.style.display = "none";
    galleryPiecesList[5].style.filter = "none";
});
galleryPiecesList[5].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "I drew this next to a couple exceptionally round hamsters. How cute.";
});


galleryPiecesList[6].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "One of three pieces I made as a court artist in CLN4U - Witnesses coming to stand. The environment for these three pieces was modelled from the Supreme Court of Canada.";
});
galleryPiecesList[7].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "One of three pieces I made as a court artist in CLN4U - Defense team presenting their case.";
});
galleryPiecesList[8].addEventListener('mouseenter', function() {
    narrationText.innerHTML = "One of three pieces I made as a court artist in CLN4U - the court first in session. Actually, this mock trial was held over Zoom, so the right figure is a Zoom avatar. The head judge is the teacher, and the court clerk stands next to him. The rest of the judges had their cameras off, so the lefthand figure isn't anyone in particular.";
});