var max = 50; // max number to increase
var min = 0; // min number to decrease
var output = 0; //default output on start

var lower = document.getElementById('lower-btn');
var add = document.getElementById('add-btn');

// set default output for display
document.getElementById('number').innerHTML = output;

// on click of 'lower count'; if output is greater than min value, lower count
lower.addEventListener('click', function () {
    if (output > min) {
        output = output - 1;
        document.getElementById('number').innerHTML = output;
    }
});

// on click of 'add count'; if output is less than max value, increase count
add.addEventListener('click', function () {
    if (output < max) {
        output = output + 1;
        document.getElementById('number').innerHTML = output;
    }
});