"use strict";
const usernames = ['admin', 'alsa', 'anna', 'rao', 'dora'];
for (let a = 0; a < usernames.length; a++) {
    if (usernames[a] === 'admin') {
        console.log('hello admin,would you like to see a status report?');
    }
    else
        console.log(`hello ${usernames[a]}, thank you for logging in again`);
}
