"use strict";
// Exercise 33:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinaryEnding;
    if (num == 1) {
        ordinaryEnding = 'st';
    }
    else if (num == 2) {
        ordinaryEnding = 'nd';
    }
    else if (num == 3) {
        ordinaryEnding = 'rd';
    }
    else {
        ordinaryEnding = 'th';
    }
    console.log(`${num}${ordinaryEnding}`);
}
