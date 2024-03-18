"use strict";
let currentUsers = ['hoor', 'noor', 'hira', 'malahim', 'hashir'];
let newUsers = ['hoor', 'masood', 'anna', 'malahim', 'alsa'];
newUsers.forEach(newUsersname => {
    let lowercase = newUsersname.toLowerCase();
    if (currentUsers.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsersname} is not available. please write a different username`);
    }
    else {
        console.log(`The Username ${newUsersname} is available`);
    }
});
