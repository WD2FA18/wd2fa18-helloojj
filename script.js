// Get and Store the DOM elements
const secondHand = document.getElementsByClassName('second-hand')[0];
const minHand = document.getElementsByClassName('min-hand')[0];
const hourHand = document.getElementsByClassName('hour-hand')[0];

function setDate() {
    // Get the current seconds, minute and hour
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();
    // Animate the Seconds Hand
    const secondsDegrees = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    // Animate the Minutes Hand
    const minsDegrees = mins * 6 + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    // Animate the Hours Hand
    const hourDegrees = hour * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    
}

setInterval(setDate, 1000);