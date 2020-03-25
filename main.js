const DISPLAY = document.querySelector('.display');
const BEGSTART = document.querySelector('.beg');
const INTSTART = document.querySelector('.int');
const EXPSTART = document.querySelector('.exp');
const TIMEDIV = document.querySelector('.timer');
const SIMIMG = document.querySelector('.sim-img');
const DIFFBTNS = [BEGSTART, INTSTART, EXPSTART];
const begImgs = ['./imerse_images/s031/s031-Anger.bmp', './imerse_images/s031/s031-Disgust.bmp', './imerse_images/s031/s031-Fear.bmp', './imerse_images/s031/s031-Happiness.bmp', './imerse_images/s031/s031-Neutral.bmp', './imerse_images/s031/s031-Sadness.bmp', './imerse_images/s031/s031-Surprise.bmp'];
const intImgs = ['./imerse_images/s009/s009-Anger.bmp', './imerse_images/s009/s009-Disgust.bmp', './imerse_images/s009/s009-Fear.bmp', './imerse_images/s009/s009-Happiness.bmp', './imerse_images/s009/s009-Neutral.bmp', './imerse_images/s009/s009-Sadness.bmp', './imerse_images/s009/s009-Surprise.bmp'];
const expImgs = ['./imerse_images/s001/s001-Anger.bmp', './imerse_images/s001/s001-Disgust.bmp', './imerse_images/s001/s001-Fear.bmp', './imerse_images/s001/s001-Happiness.bmp', './imerse_images/s001/s001-Neutral.bmp', './imerse_images/s001/s001-Sadness.bmp', './imerse_images/s001/s001-Surprise.bmp'];
const SIMBTNS = document.querySelector('.sim-btns-hide');
let DIFFSETTING = '';
let simAnswers = {};
let CURRENTIMG = '';

// Begin the simulation with one of the buttons
DIFFBTNS.forEach(button => button.addEventListener('click', function (event) {
    DISPLAY.removeChild(BEGSTART);
    DISPLAY.removeChild(INTSTART);
    DISPLAY.removeChild(EXPSTART);
    let countdown = 2;

    function timedCount() {
        TIMEDIV.innerHTML = countdown;
        countdown = countdown - 1;
        if (countdown > -1) {
            setTimeout(timedCount, 1000);
        };
        if (countdown === -1) {
            startSim(event.target.innerHTML);
        }
    }
    timedCount();
}))

//event listeners for the answer buttons
Array.from(SIMBTNS.children).forEach(button => button.addEventListener('click', function (event) {
    //store image src, button clicked in simAnswers
    imgType = getImgType(CURRENTIMG);
    simAnswers[imgType] = event.target.innerHTML;
    console.log(simAnswers);
    
    //hide buttons
    SIMBTNS.classList.add('sim-btns-hide');
    
    //start a new countdown

    //return to begSim, intSim, expSim as expected
    startSim(DIFFSETTING);
}))

//get image face type form src
function getImgType(src) {
    let endCharIdx;
    let startCharIdx;
    for (i = 1; i < src.length - 1; i++) {
        if (src[i] === src[i].toUpperCase() && src[i] !== '.') {
            // debugger
            startCharIdx = i;
        } else if (src[i] === '.') {
            // debugger
            endCharIdx = i - 1;
        }
    }
    // debugger
    return src.slice(startCharIdx, endCharIdx + 1);
}

//after the countdown runs, the simulation starts based on what button was clicked
function startSim(diff) {
    TIMEDIV.innerHTML = '';
    DIFFSETTING = diff;

    if (diff === 'Beginner') {
        begSim();
    } else if (diff = 'Intermediate') {
        console.log('do something a little different here');
    } else {
        console.log('do something totally different here');
    }
}

//remove image after the simulation's time setting expires
//prompts user for answer after image is gone
function clearSimImg() {
    CURRENTIMG = SIMIMG.src;
    SIMIMG.src = '';
    SIMBTNS.classList.remove('sim-btns-hide');
}

//get user input for each image displayed
// function getAnswer() {
    
// }

//shuffle the array of images, uses the Durstenfeld shuffle method
function shuffleImgs(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//beginner level simulation
function begSim() {
    imgs = shuffleImgs(begImgs);

    if (imgs.length) {
        SIMIMG.src = imgs.shift();
        setTimeout(clearSimImg, 3000);
    }  // else end of simulation logic
}

