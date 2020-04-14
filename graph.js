// Manipulate hiding and revealing graphs via tabs
function openGraph(evt, name) {
    evt.preventDefault();
    evt.stopPropagation();

    let i, tabcontent, tablinks;
    if (name === 'Beginner') {
        data = createBegData();
        beginnerGraphMaker(data);
    } else if (name === 'Intermediate') {
        data = createIntData();
        intermediateGraphMaker(data);
    } else if (name === 'Expert') {
        data = createExpData();
        expertGraphMaker(data);
    } else if (name === 'Master') {
        data = createMasData();
        masterGraphMaker(data)
    } else if (name === 'Eyes') {
        data = createEyeData();
        eyeGraphMaker(data);
    }

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = 'flex';
    evt.currentTarget.className += ' active';
}

// Create the array of data objects for the graph
function createBegData() {
    let numAttempts = ATTEMPTS.beg;
    let begData = [];

    let resKeys = Object.keys(BEGRESULTS);
    let resValues = Object.values(BEGRESULTS);

    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / numAttempts) * 100).toFixed(2))
        begData.push({x: i+1, y: percent, label: resKeys[i]})
    }
    return begData;
}

// Beginner Stat Graph
function beginnerGraphMaker(someData) {
    let begChart = new CanvasJS.Chart('beg-res-graph',
        {
            title:{
                text: 'Beginner Stats'
            },
            axisY: {
                title: "Percent Correct Answers",
                maximum: 100
            },
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

// Create the array of data objects for the graph
function createIntData() {
    let numAttempts = ATTEMPTS.int;
    let intData = [];

    let resKeys = Object.keys(INTRESULTS);
    let resValues = Object.values(INTRESULTS);

    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / numAttempts) * 100).toFixed(2))
        intData.push({ x: i + 1, y: percent, label: resKeys[i] })
    }
    return intData;
}

// Intermediate Stat Graph
function intermediateGraphMaker(someData) {
    let intChart = new CanvasJS.Chart('int-res-graph',
        {
            title: {
                text: 'Intermediate Stats'
            },
            axisY: {
                title: "Percent Correct Answers",
                maximum: 100
            },
            data: [
                {
                    type: 'column',
                    showInLegend: true,
                    legendMarkerType: "none",
                    legendText: `Number of attempts on this difficulty: ${ATTEMPTS.int}`,
                    dataPoints: someData
                }
            ]
        }
    )
    intChart.render();
}

// Create the array of data objects for the graph
function createExpData() {
    let numAttempts = ATTEMPTS.exp;
    let expData = [];

    let resKeys = Object.keys(EXPRESULTS);
    let resValues = Object.values(EXPRESULTS);
    
    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / numAttempts) * 100).toFixed(2))
        expData.push({ x: i + 1, y: percent, label: resKeys[i] })
    }
    
    return expData;
}

// Expert Stat Graph
function expertGraphMaker(someData) {
    let expChart = new CanvasJS.Chart('exp-res-graph',
        {
            title: {
                text: 'Expert Stats'
            },
            axisY: {
                title: "Percent Correct Answers",
                maximum: 100
            },
            data: [
                {
                    type: 'column',
                    showInLegend: true,
                    legendMarkerType: "none",
                    legendText: `Number of attempts on this difficulty: ${ATTEMPTS.exp}`,
                    dataPoints: someData
                }
            ]
        }
    )
    expChart.render();
}

// Create the array of data objects for the graph
function createMasData() {
    let numAttempts = ATTEMPTS.mas;
    let masData = [];

    let resKeys = Object.keys(MASRESULTS);
    let resValues = Object.values(MASRESULTS);
    
    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / (numAttempts * 4)) * 100).toFixed(2))
        masData.push({ x: i + 1, y: percent, label: resKeys[i] })
    }
    
    return masData;
}

// Master Stat Graph
function masterGraphMaker(someData) {
    let masChart = new CanvasJS.Chart('mas-res-graph',
        {
            title: {
                text: 'Master Stats'
            },
            axisY: {
                title: "Percent Correct Answers",
                maximum: 100
            },
            data: [
                {
                    type: 'column',
                    showInLegend: true,
                    legendMarkerType: "none",
                    legendText: `Number of attempts on this difficulty: ${ATTEMPTS.mas}`,
                    dataPoints: someData
                }
            ]
        }
    )
    masChart.render();
}

// eyes-only graph
function createEyeData() {
    let numAttempts = ATTEMPTS.eye;
    let eyeData = [];

    let resKeys = Object.keys(EYERESULTS);
    let resValues = Object.values(EYERESULTS);

    for (let i = 0; i < resKeys.length; i++) {
        let percent = parseFloat(((resValues[i] / numAttempts) * 100).toFixed(2))
        eyeData.push({ x: i + 1, y: percent, label: resKeys[i] })
    }

    return eyeData;
}

function eyeGraphMaker(someData) {
    let eyeChart = new CanvasJS.Chart('eye-res-graph',
        {
            title: {
                text: 'Eyes-Only Stats'
            },
            axisY: {
                title: "Percent Correct Answers",
                maximum: 100
            },
            data: [
                {
                    type: 'column',
                    showInLegend: true,
                    legendMarkerType: "none",
                    legendText: `Number of attempts on this difficulty: ${ATTEMPTS.exp}`,
                    dataPoints: someData
                }
            ]
        }
    )
    eyeChart.render();
}