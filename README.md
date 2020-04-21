# Welcome to IMERSE

IMERSE, or Interpersonal Micro-Expression Recognition Self-training Engine, is a tool for anyone with an impaired ability to read emotions in the faces of others.

[Check it out here!](https://alec-keeler.github.io/IMERSE/)

![beginner simulation](IMERSE-readme-gif.gif)

## Technologies Used

IMERSE was built using JavaScript, CanvasJS, HTML, and CSS.  All of the core logic was written in JavaScript, while CanvasJS let us generate and style graphs.  HTML was used to structure the app, and CSS was used to style it.

## Features

### Simulation Difficulty Setting

Users are able to select a difficulty at the beginning of each simulation.  Images of facial expressions are flashed to the user for an amount of time based on the difficulty chosen.  Selecting a difficulty button randomly selects one of ten image sets (or four of ten for Master), using the Durstenfeld shuffle method for the set selection and to randomize the order of the images.

```
diffBtnsArr.forEach(button => button.addEventListener('click', function (event) {
    DIFFBTNS.classList.add('hidden')
    let countdown = 3;

    simAnswers = { Neutral: 0, Happiness: 0, Sadness: 0, Anger: 0, Disgust: 0, Surprise: 0, Fear: 0 };
    currImgList = [];
    diff = event.target.innerHTML

    currImgList = shuffleImgSetList(imgSetList).slice(0)[0];
    if (diff === 'Beginner' || diff === 'Intermediate' || diff === 'Expert' || diff === 'Eyes') {
        currImgList = shuffleImgSetList(imgSetList).slice(0)[0];
    } else if (diff === 'Master') {
        currImgList = shuffleImgs(createMasterList()).slice(0);
    }

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

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
    DISPLAYTITLE.innerHTML = 'Watch Closely Then Choose The Emotion'
}))
```

Each Difficulty button is given an event listener that will gather necessary information to begin the appropriate simulation.  First, I hide the buttons by applying a hidden CSS class.  I ensure several variables are reset to base values.  The image set list is then shuffled and one is chosen from the front of the set array.  I make sure to create a duplicate of the image set so the same set can potentially be used again.  Then, I close any open graph tabs, which ensures that the graph's data is recalculated with the new simulation's data once it's complete.  I begin a timedown which is displayed to the user, and begin the simulation based on the difficulty selected.

### User's Results Graphs

I placed the graphs in CSS tabs.  Clicking on a tab will calculate the stored data for the chosen difficulty and render a graph using CanvasJS.  During a user's visit, I store the number of attempts they make for each difficulty, and store their successful results for every simulation.

```
function createBegData() {
    let numAttempts = ATTEMPTS.beg;
    let begData = [];

    let resKeys = Object.keys(BEGRESULTS);
    let resValues = Object.values(BEGRESULTS);
    let color = '';

    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / numAttempts) * 100).toFixed(2))
        if (i % 2 === 0) {
            color = '#74D14C';
        } else {
            color = '#4C96D7';
        }
        begData.push({x: i+1, y: percent, label: resKeys[i], color: color})
    }
    return begData;
}
```

I break down the stored results to create the necessary data to give results in percentages.  PraseFloat and toFixed are used to ensure I get a valid number to use as a percentage.  A color for the bar on the graph is also chosen here.  The data is returned and fed into a function that renders the graph.

```
function beginnerGraphMaker(someData) {
    let begChart = new CanvasJS.Chart('beg-res-graph',
        {
            ...
            data: [
            {
                type: 'column',
                showInLegend: true,
                legendMarkerType: "none",
                legendText: `Number of attempts on this difficulty: ${ATTEMPTS.beg}`,
                dataPoints: someData
            }
            ]
        }
    )
    begChart.render();
}
```