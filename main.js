const DISPLAY = document.querySelector('.display');
const BEGSTART = document.querySelector('.beg');
const INTSTART = document.querySelector('.int');
const EXPSTART = document.querySelector('.exp');
const MASSTART = document.querySelector('.mas');
const EYESTART = document.querySelector('.eye');
const TIMEDIV = document.querySelector('.timer');
const SIMIMG = document.querySelector('.sim-img');
const DIFFBTNS = document.querySelector('.diff-btns');
const MOUTHHIDER = document.querySelector('.eyes-only-blocker')
const diffBtnsArr = [BEGSTART, INTSTART, EXPSTART, MASSTART, EYESTART];
const SIMBTNS = document.querySelector('.sim-btns');
const ANSDIV = document.querySelector('.answers');
let DIFFSETTING = '';
let simAnswers = { Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0};
let CURRENTIMG = '';
let currImgList = [];
const ATTEMPTS = {beg: 0, int: 0, exp: 0, mas: 0, eye: 0};
const BEGRESULTS = {Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0}
const INTRESULTS = {Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0}
const EXPRESULTS = {Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0}
const MASRESULTS = {Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0}
const EYERESULTS = {Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0}

// Begin the simulation with one of the buttons
diffBtnsArr.forEach(button => button.addEventListener('click', function (event) {
    DIFFBTNS.classList.add('hidden')
    let countdown = 3;
    //resetting simAnswers between simulations
    simAnswers = { Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0 };
    currImgList = [];
    diff = event.target.innerHTML

    //create the correct image list
    currImgList = shuffleImgSetList(imgSetList).slice(0)[0];
    if (diff === 'Beginner' || diff === 'Intermediate' || diff === 'Expert' || diff === 'Eyes') {
        currImgList = shuffleImgSetList(imgSetList).slice(0)[0];
    } else if (diff === 'Master') {
        currImgList = shuffleImgs(createMasterList()).slice(0);
    }

    // Close stat graph tabs
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
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
    //store image src
    imgType = getImgType(CURRENTIMG);
    let targetResObj;
    
    // Selects a set of results fo increment for the graph
    if (DIFFSETTING === 'Beginner') {
        targetResObj = BEGRESULTS;
    } else if (DIFFSETTING === 'Intermediate') {
        targetResObj = INTRESULTS;
    } else if (DIFFSETTING === 'Expert') {
        targetResObj = EXPRESULTS;
    } else if (DIFFSETTING === 'Master') {
        targetResObj = MASRESULTS;
    } else if (DIFFSETTING === "Eyes") {
        targetResObj = EYERESULTS;
    }
    
    if (imgType === event.target.innerHTML) {
        incrementResKey(imgType, targetResObj);
        simAnswers[imgType]++;
    }
    
    //hide buttons
    SIMBTNS.classList.add('hidden');
    
    //start a new countdown unless the img list is empty
    let countdown = 3;

    if (currImgList.length === 0) {
        printAnswers();

        if (!MOUTHHIDER.classList.contains('hidden')) {
            MOUTHHIDER.classList.add('hidden');
        }
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
    } else if (diff === 'Expert') {
        expSim();
    } else if (diff === 'Master') {
        masSim();
    } else if (diff === 'Eyes') {
        eyeSim();
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
        ANSDIV.lastChild.innerHTML = `${answerKeys[i]}: ${answerValues[i]} Correct`
    }
    
    incrementAttempts();
    currImgList = [];
    DIFFBTNS.classList.remove('hidden');
}

//beginner level simulation
function begSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 3000);
    }
}

//intermediate level simulation
function intSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 1000);
    }
}

//expert level simulation
function expSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 500);
    }
}

//master level simulation
function masSim() {
    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 500);
    }
}

//eyes-only level simulation
function eyeSim() {
    if (MOUTHHIDER.classList.contains('hidden')) {
        MOUTHHIDER.classList.remove('hidden');
    };

    if (currImgList.length) {
        SIMIMG.src = currImgList.shift();
        setTimeout(clearSimImg, 500);
    };
}

function incrementAttempts() {
    if (DIFFSETTING === 'Beginner') {
        ATTEMPTS.beg++;
    } else if (DIFFSETTING === 'Intermediate') {
        ATTEMPTS.int++;
    } else if (DIFFSETTING === 'Expert') {
        ATTEMPTS.exp++;
    } else if (DIFFSETTING === 'Master') {
        ATTEMPTS.mas++;
    } else if (DIFFSETTING === 'Eyes') {
        ATTEMPTS.eye++;
    }
}

function incrementResKey(key, target) {
    if (key === 'Neutral') {
        target.Neutral++;
    } else if (key === 'Happiness') {
        target.Happiness++;
    } else if (key === 'Sadness') {
        target.Sadness++;
    } else if (key === 'Anger') {
        target.Anger++;
    } else if (key === 'Disgust') {
        target.Disgust++;
    } else if (key === 'Fear') {
        target.Fear++;
    } else if (key === 'Surprise') {
        target.Surprise++;
    }

}