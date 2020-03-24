const INFODIV = document.querySelector('.info-buttons');
const INFOBOX = document.querySelector('.info-box');

const genInfo = 'It is widely accepted that there are at least six universally recognizable facial expressions of emotion.  Macrco- and micro-expressions are flashes of these emotions, and are vital to our interpersonal relationships.  Micro-expressions last for half a second or less.  Expressions lasting longer are called macro-expressions. Our facial expressions are the best indicators of emotional state, and accurately reading them is vital.  Facial expressions are made up using dozens of muscles in the face, yet still at least six of them look the same in every culture around the world.'
const hapInfo = "Corners of the lips are drawn back and up.  Mouth may or may nor be parted, teeth expose.  A wrinkle runs from the outer nose to outer lip.  Cheeks are raised.  Lower eyelid may show wrinkles or be tense.  Crow's feet near the outside of the eyes. "
const sadInfo = 'Inner corners of the eyebrows are drawn in and then up.  Skin below the eyebrows is triangulated, with inner corner up.  Corner of the lips are drawn down.  Jaw comes up.  Lower lip pouts out.'
const angInfo = 'The eyebrows are lowered and drawn together. Vertical lines appear between eyebrows.  Lower lid is tensed.  Eyes are in hard stare or bulging.  Lips can be pressed firmly together, with corners down, or in a square shape as if shouting.  Nostrils may be dilated.  The lower jaw juts out.'
const disInfo = 'Upper lip is raised.  Upper teeth may be exposed.  Nose is wrinkled.  Cheeks are raised.'
const fearInfo = 'Eyebrows are raised and drawn together, usually in a flat line.  Wrinkles in the forehead are in the center between the eyebrows, not across.  Upper eyelid is raised, but the lower lid is tense and drawn up.  Eyes have the upper white showing, but not the lower white.  Mouth is open and lips are slightly tensed or stretched and drawn back.'
const surInfo = 'The eyebrows are raised and curved.  Skin below the brow is stretched.  Horizontal wrinkles across the forehead.  Eyelids are opened, white of the eye showing above and below.  Jaw drops open and teeth are parted but there is no tension or stretching of the mouth.'



Array.from(INFODIV.children).forEach(button => button.addEventListener('click', function(event) {
    if (event.currentTarget.innerHTML === 'General') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== genInfo) {
            document.querySelector('.info-box').innerHTML = genInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Happiness') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== hapInfo) {
            document.querySelector('.info-box').innerHTML = hapInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Sadness') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== sadInfo) {
            document.querySelector('.info-box').innerHTML = sadInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Anger') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== angInfo) {
            document.querySelector('.info-box').innerHTML = angInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Disgust') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== disInfo) {
            document.querySelector('.info-box').innerHTML = disInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Fear') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== fearInfo) {
            document.querySelector('.info-box').innerHTML = fearInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    } else if (event.currentTarget.innerHTML === 'Surprise') {
        if (document.querySelector('.info-box').innerHTML === "" || document.querySelector('.info-box').innerHTML !== surInfo) {
            document.querySelector('.info-box').innerHTML = surInfo;
        } else {
            document.querySelector('.info-box').innerHTML = "";
        }
    }
}))