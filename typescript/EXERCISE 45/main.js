"use strict";
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createcar("honda", "civic", { color: 'black', year: "2022" });
console.log(myCar);
