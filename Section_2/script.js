'use strict';
/*
const calculateAvg = (score1, score2, score3) => (score1 + score2 + score3)/3;

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log('Dolphins Win!!');
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log('Koalas Win!!'); 
    } else {
        console.log('No one wins!!'); 
    }
}

const avgDolphins = calculateAvg(44,23,71);
const avgKoalas = calculateAvg(65,54,49);
const avgDolphins1 = calculateAvg(84,54,41);
const avgKoalas1 = calculateAvg(23,34,27);
checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins1, avgKoalas1);
*/

const calcTip = function (billAmount) {
    const tip = (billAmount>=50 && billAmount<=300)? billAmount * 0.15 : billAmount * 0.20;
    return tip;
}

const bills = [125,555,44];
const totalAmount = [];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
for (let i=0; i<bills.length; i++) {
    totalAmount[i] = bills[i] + tips[i];
}
console.log('Tips are ' + tips);
console.log('Total amount is ' + totalAmount);