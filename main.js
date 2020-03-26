const DISPLAY = document.querySelector('.display');
const BEGSTART = document.querySelector('.beg');
const INTSTART = document.querySelector('.int');
const EXPSTART = document.querySelector('.exp');
const TIMEDIV = document.querySelector('.timer');
const SIMIMG = document.querySelector('.sim-img');
const DIFFBTNS = document.querySelector('.diff-btns');
const diffBtnsArr = [BEGSTART, INTSTART, EXPSTART];
const begImgs = ['./imerse_images/s031/s031-Anger.bmp', './imerse_images/s031/s031-Disgust.bmp', './imerse_images/s031/s031-Fear.bmp', './imerse_images/s031/s031-Happiness.bmp', './imerse_images/s031/s031-Neutral.bmp', './imerse_images/s031/s031-Sadness.bmp', './imerse_images/s031/s031-Surprise.bmp'];
const intImgs = ['./imerse_images/s009/s009-Anger.bmp', './imerse_images/s009/s009-Disgust.bmp', './imerse_images/s009/s009-Fear.bmp', './imerse_images/s009/s009-Happiness.bmp', './imerse_images/s009/s009-Neutral.bmp', './imerse_images/s009/s009-Sadness.bmp', './imerse_images/s009/s009-Surprise.bmp'];
const expImgs = ['./imerse_images/s001/s001-Anger.bmp', './imerse_images/s001/s001-Disgust.bmp', './imerse_images/s001/s001-Fear.bmp', './imerse_images/s001/s001-Happiness.bmp', './imerse_images/s001/s001-Neutral.bmp', './imerse_images/s001/s001-Sadness.bmp', './imerse_images/s001/s001-Surprise.bmp'];
const SIMBTNS = document.querySelector('.sim-btns');
const ANSDIV = document.querySelector('.answers');
let DIFFSETTING = '';
let simAnswers = {};
let CURRENTIMG = '';
let currImgList = [];

// Begin the simulation with one of the buttons
diffBtnsArr.forEach(button => button.addEventListener('click', function (event) {
    DIFFBTNS.classList.add('hidden')
    let countdown = 3;
    simAnswers = {};
    currImgList = [];
    diff = event.target.innerHTML

    //create the correct image list
    if (diff === 'Beginner') {
        currImgList = shuffleImgs(begImgs).slice(0);
    } else if (diff === 'Intermediate') {
        currImgList = shuffleImgs(intImgs).slice(0);
    } else if (diff === 'Expert') {
        currImgList = shuffleImgs(expImgs).slice(0);
    }

    //start the correct simulation after a countdown
    function timedCount() {
        TIMEDIV.innerHTML = countdown;
        countdown = countdown - 1;
        if (countdown > -1) {
            setTimeout(timedCount, 1000);
        };
        if (countdown === -1) {
            startSim(diff);
        }
    }
    timedCount();
    ANSDIV.innerHTML = ''
}))

//event listeners for the answer buttons
Array.from(SIMBTNS.children).forEach(button => button.addEventListener('click', function (event) {
    //store image src, button clicked in simAnswers
    imgType = getImgType(CURRENTIMG);
    simAnswers[imgType] = event.target.innerHTML;
    // console.log(simAnswers);
    
    //hide buttons
    SIMBTNS.classList.add('hidden');
    
    //start a new countdown unless the img list is empty
    let countdown = 3;

    if (currImgList.length === 0) {
        printAnswers();
        return;
    }

    function timedCount() {
        TIMEDIV.innerHTML = countdown;
        countdown = countdown - 1;
        if (countdown > -1) {
            setTimeout(timedCount, 1000);
        };
        if (countdown === -1) {
            startSim(DIFFSETTING);
        }
    }
    timedCount();
}))

//get image face type form src
function getImgType(src) {
    let endCharIdx;
    let startCharIdx;
    for (i = 1; i < src.length - 1; i++) {
        if (src[i] === src[i].toUpperCase() && src[i] !== '.') {
            startCharIdx = i;
        } else if (src[i] === '.') {
            endCharIdx = i - 1;
        }
    }
    return src.slice(startCharIdx, endCharIdx + 1);
}

//after the countdown runs, the simulation starts based on what button was clicked
function startSim(diff) {
    TIMEDIV.innerHTML = '';
    DIFFSETTING = diff;

    if (diff === 'Beginner') {
        begSim();
    } else if (diff === 'Intermediate') {
        intSim();
    } else if(diff === 'Expert') {
        expSim();
    }
}

//remove image after the simulation's time setting expires
//prompts user for answer after image is gone
function clearSimImg() {
    CURRENTIMG = SIMIMG.src;
    SIMIMG.src = '';
    SIMBTNS.classList.remove('hidden');
}

//shuffle the array of images, uses the Durstenfeld shuffle method
function shuffleImgs(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//prints answers to display and resets simulation
function printAnswers() {
    let answerKeys = Object.keys(simAnswers);
    let answerValues = Object.values(simAnswers);

    for (i = 0; i < answerKeys.length; i++) {
        let listItem = document.createElement('li');
        ANSDIV.appendChild(listItem);
        ANSDIV.lastChild.innerHTML = `${answerKeys[i]}: ${answerValues[i]}`
    }

    currImgList = [];
    DIFFBTNS.classList.remove('hidden');
}

//beginner level simulation
function begSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 3000);
    } else {
        printAnswers();
    }
}

//intermediate level simulation
function intSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 1000);
    } else {
        printAnswers();
        DIFFBTNS.classList.remove('hidden');
    }
}

//expert level simulation
function expSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 500);
    } else {
        printAnswers();
        DIFFBTNS.classList.remove('hidden');
    }
}