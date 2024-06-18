let closeNavButton = document.getElementById('closeNavButton');
let navCard = document.getElementById('navCard');

// style elements needed to change in order to open the nav bar
function openNav() {
    navCard.style.left = "0";
    closeNavButton.style.right = "10px";
    closeNavButton.style.top = "10px";
    document.getElementById('contacterDetails').style.zIndex = "-1";
}

// changing style elements to close the nav bar
closeNavButton.onclick = function() {
    navCard.style.left = "-300%";
    closeNavButton.style.right = "500%";
    document.getElementById('contacterDetails').style.zIndex = "2";
}