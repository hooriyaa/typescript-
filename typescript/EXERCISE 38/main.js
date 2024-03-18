"use strict";
function describe__city(city, country = 'default country') {
    console.log(`${city} is in ${country}.`);
}
describe__city('karachi', 'pakistan');
describe__city('Tianjin', 'china');
describe__city('karachi');
