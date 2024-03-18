"use strict";
// EXCERCISE 43:
let magician = ['david blaine', 'criss copperfield', 'shin lim'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianarray = copyArray(magician);
make_great(copymagicianarray);
console.log('This is my original array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianarray);
