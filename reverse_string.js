
function stringReverseDecrement(str) {
    "use strict"
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function stringReverseDecrement(str) {
    return str.split('').reverse().join('');
}


console.log(stringReverseDecrement('Hello World!'));
console.log(stringReverseDecrement('Hello World!'));
