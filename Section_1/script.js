const marksWeight = 78; 
const johnsWeight = 95; 
const marksHeight = 1.69; 
const johnsHeight = 1.88; 

let markBMI = marksWeight / (marksHeight * marksHeight);
let johnBMI = johnsWeight / johnsHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
document.getElementById('challenge1').innerText = String(markBMI) + johnBMI + markHigherBMI;
console.log(markBMI, johnBMI, markHigherBMI);
console.log("Trail 1");