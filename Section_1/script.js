/*
const marksWeight = 78; 
const johnsWeight = 95; 
const marksHeight = 1.69; 
const johnsHeight = 1.88; 

let markBMI = marksWeight / (marksHeight * marksHeight);
let johnBMI = johnsWeight / johnsHeight ** 2;

// challenge 1
const markHigherBMI = markBMI > johnBMI;
document.getElementById('challenge1').innerText = String(markBMI) + johnBMI + markHigherBMI;
console.log(markBMI, johnBMI, markHigherBMI);


// challenge 2
let displayString;
if (markBMI > johnBMI) {
    displayString = "Mark's BMI is higher than John's!";
}
else {
    displayString = "Mark's BMI is higher than John's!";
}
document.getElementById('challenge1').innerText = displayString;
*/

// challenge 3

const dolphins = (97 + 100 + 101) / 3;
const koalas = (60 + 95 + 106) / 3;
let displayString;
if (koalas > dolphins && koalas>=100) {
    displayString = "Koalas Win!!";
}
else if (dolphins > koalas && dolphins>=100) {
    displayString = "Dolphins Win!";
}
else if (dolphins === koalas && dolphins>=100 && koalas>=100){
    displayString = "It's a Draw!";
}
else {
    displayString = "Nobody wins!"
}
console.log(koalas, dolphins);
document.getElementById('challenge1').innerText = displayString;
 