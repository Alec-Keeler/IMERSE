const HEADER = document.querySelector('.title');
const BUTTON = document.querySelector('.clicker');

BUTTON.addEventListener('click', function(event) {
    if (HEADER.innerHTML === "IMERSE"){
        HEADER.innerHTML = "YOU CLICKED THE BUTTON"
    } else {
        HEADER.innerHTML = "IMERSE"
    }
})