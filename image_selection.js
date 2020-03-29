const setOne = ['./imerse_images/s001/s001-Anger.bmp', './imerse_images/s001/s001-Disgust.bmp', './imerse_images/s001/s001-Fear.bmp', './imerse_images/s001/s001-Happiness.bmp', './imerse_images/s001/s001-Neutral.bmp', './imerse_images/s001/s001-Sadness.bmp', './imerse_images/s001/s001-Surprise.bmp'];
const setTwo = ['./imerse_images/s009/s009-Anger.bmp', './imerse_images/s009/s009-Disgust.bmp', './imerse_images/s009/s009-Fear.bmp', './imerse_images/s009/s009-Happiness.bmp', './imerse_images/s009/s009-Neutral.bmp', './imerse_images/s009/s009-Sadness.bmp', './imerse_images/s009/s009-Surprise.bmp'];
const setThree = ['./imerse_images/s013/s013-Anger.bmp', './imerse_images/s013/s013-Disgust.bmp', './imerse_images/s013/s013-Fear.bmp', './imerse_images/s013/s013-Happiness.bmp', './imerse_images/s013/s013-Neutral.bmp', './imerse_images/s013/s013-Sadness.bmp', './imerse_images/s013/s013-Surprise.bmp'];
const setFour = ['./imerse_images/s015/s015-Anger.bmp', './imerse_images/s015/s015-Disgust.bmp', './imerse_images/s015/s015-Fear.bmp', './imerse_images/s015/s015-Happiness.bmp', './imerse_images/s015/s015-Neutral.bmp', './imerse_images/s015/s015-Sadness.bmp', './imerse_images/s015/s015-Surprise.bmp'];
const setFive = ['./imerse_images/s018/s018-Anger.bmp', './imerse_images/s018/s018-Disgust.bmp', './imerse_images/s018/s018-Fear.bmp', './imerse_images/s018/s018-Happiness.bmp', './imerse_images/s018/s018-Neutral.bmp', './imerse_images/s018/s018-Sadness.bmp', './imerse_images/s018/s018-Surprise.bmp'];
const setSix = ['./imerse_images/s026/s026-Anger.bmp', './imerse_images/s026/s026-Disgust.bmp', './imerse_images/s026/s026-Fear.bmp', './imerse_images/s026/s026-Happiness.bmp', './imerse_images/s026/s026-Neutral.bmp', './imerse_images/s026/s026-Sadness.bmp', './imerse_images/s026/s026-Surprise.bmp'];
const setSeven = ['./imerse_images/s028/s028-Anger.bmp', './imerse_images/s028/s028-Disgust.bmp', './imerse_images/s028/s028-Fear.bmp', './imerse_images/s028/s028-Happiness.bmp', './imerse_images/s028/s028-Neutral.bmp', './imerse_images/s028/s028-Sadness.bmp', './imerse_images/s028/s028-Surprise.bmp'];
const setEight = ['./imerse_images/s031/s031-Anger.bmp', './imerse_images/s031/s031-Disgust.bmp', './imerse_images/s031/s031-Fear.bmp', './imerse_images/s031/s031-Happiness.bmp', './imerse_images/s031/s031-Neutral.bmp', './imerse_images/s031/s031-Sadness.bmp', './imerse_images/s031/s031-Surprise.bmp'];
const setNine = ['./imerse_images/s037/s037-Anger.bmp', './imerse_images/s037/s037-Disgust.bmp', './imerse_images/s037/s037-Fear.bmp', './imerse_images/s037/s037-Happiness.bmp', './imerse_images/s037/s037-Neutral.bmp', './imerse_images/s037/s037-Sadness.bmp', './imerse_images/s037/s037-Surprise.bmp'];
const setTen = ['./imerse_images/s038/s038-Anger.bmp', './imerse_images/s038/s038-Disgust.bmp', './imerse_images/s038/s038-Fear.bmp', './imerse_images/s038/s038-Happiness.bmp', './imerse_images/s038/s038-Neutral.bmp', './imerse_images/s038/s038-Sadness.bmp', './imerse_images/s038/s038-Surprise.bmp'];
const imgSetList = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setTen];


function shuffleImgSetList(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createMasterList() {
    let possLists = shuffleImgSetList(imgSetList).slice(0);
    let masterList = [possLists.shift(), possLists.shift(), possLists.shift(), possLists.shift()].flat();
    return masterList;
}