// Quick Operation
console.log('Hello');
// Long Operation
pauseComputer(str => console.log(str), 5000, 'Long Thing Done');
console.log('Long Thing Done');
// Another Quick Operation
console.log('Goodbye');


function pauseComputer(func, ms, words) {
    setTimeout(func, ms, words);
}