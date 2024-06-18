// I was challenged to create the least efficient code to do this as possible.

let galleryImagesList = document.getElementsByClassName('stickyNote');

for (let i = 0; i < galleryImagesList.length; i++) {
    galleryImagesList[i].addEventListener('click', function() {
        enlargeImage(galleryImagesList[i]);
        // adding a unique event listener to each image that calls on the function enlargeImage with their own unique parameter (img)
    });
}

function enlargeImage(img) {
    img.style.height = "80vh";
    img.style.width = 'auto';
    img.style.zIndex = "5";
    img.style.position = "fixed";
    img.style.top = "10vh";
    img.style.left = "25vw";
    screenShade.style.display = "block";
    screenShade.style.opacity = "0.8";
    screenShade.style.zIndex = "4";

    document.getElementById("closeImage").style.display = "block";     
    document.getElementById("closeImage").style.zIndex = "5";
}

function closeImage() {
    // This function is terrible and ugly and bad, it shouldn't work but I'm cursed with the knowledge that it does even despite everything.
    screenShade.style.display = "none";
    screenShade.style.opacity = "0";
    screenShade.style.zIndex = "-5";

    for (i of galleryImagesList) {
        i.style.position = "static";
        i.style.width = "100%";
        i.style.height = "auto";
        i.style.zIndex = "0"
    }
    document.getElementById('closeImage').style.display = "none";
} 
    