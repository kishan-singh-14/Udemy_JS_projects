'use strict';

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