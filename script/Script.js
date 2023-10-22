let isOpen = false;

function Clicked(){
    if(isOpen === true) {
        isOpen = false
    } else {
        isOpen = true
    }
    let hamburgerMenu = document.getElementById("hamburgerMenu");
    let hamburgerList = document.getElementById("hamburgerList");

    if (isOpen === true){
        hamburgerMenu.className = "open"
        hamburgerList.style.height = "240px"
    } else {
        hamburgerMenu.className = "closed"
        hamburgerList.style.height = "0px"
    }
}

function myFunction() {
    let hamburgerMenu = document.getElementById("hamburgerMenu");

    hamburgerMenu.className = "closed"
    hamburgerList.style.height = "0px"

}


let upButton = document.getElementById("up-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 28 || document.documentElement.scrollTop > 28) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}