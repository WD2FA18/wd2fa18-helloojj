// simulate coin flip
// want to input how many times
// want a ccount of heads, tails and the order


function flipCoin(howMany) {
    "use strict";
    
    const resultObject = {
        headsCount: 0,
        tailsCount: 0,
        record: []
    };
    
    for (let i = 0; i < howMany; i++) {
        if (getRandomInt(2) === 0) { // will be either 0 or 1
            // heads
            resultObject.headsCount++;
            resultObject.record.push('Heads');
        } else {
            // tails
            resultObject.tailsCount++;
            resultObject.record.push('Tails');
        }
    }
    return resultObject;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



console.log(flipCoin(5));
console.log(flipCoin(10));