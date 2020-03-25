// const HEADER = document.querySelector('.title');
// const BUTTON = document.querySelector('.clicker');

// BUTTON.addEventListener('click', function(event) {
//     if (HEADER.innerHTML === "IMERSE"){
//         HEADER.innerHTML = "YOU CLICKED THE BUTTON"
//     } else {
//         HEADER.innerHTML = "IMERSE"
//     }
// })

const DISPLAY = document.querySelector('.display');
const BEGSTART = document.querySelector('.beg')
const INTSTART = document.querySelector('.int')
const EXPSTART = document.querySelector('.exp')
const TIMEDIV = document.querySelector('.timer')
const SIMIMG = document.querySelector('.sim-img')
const btns = [BEGSTART, INTSTART, EXPSTART]

function startSim(diff) {
    if (diff === 'Beginner') {
        console.log('do something here')
        TIMEDIV.innerHTML = ''
        begSim()
    } else if (diff = 'Intermediate') {
        console.log('do something a little different here')
    } else {
        console.log('do something totally different here')
    }
}

function clearSimImg() {
    SIMIMG.src = '';
}

function begSim() {
    SIMIMG.src = 's001-01_img.bmp';
    setTimeout(clearSimImg, 3000)
}


btns.forEach(button => button.addEventListener('click', function(event) {
    DISPLAY.removeChild(BEGSTART)
    DISPLAY.removeChild(INTSTART)
    DISPLAY.removeChild(EXPSTART)
    let countdown = 5

    function timedCount() {
        TIMEDIV.innerHTML = countdown;
        countdown = countdown - 1;
        if (countdown > -1) {
            setTimeout(timedCount, 1000);
        };
        if (countdown === -1) {
            startSim(event.target.innerHTML)
        }
    }
    timedCount();

}))

