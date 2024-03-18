// EXERCISE:23:
// test 1: equality comparsion(true)
let car:string='subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log( car =='subaru');

// test 2: strict equality comparsion(true)
console.log("Is cars === 'subaru'? I predict true.");
console.log( car ==='subaru');

// test 3:  Inequality comparsion(false)
console.log("Is cars |= 'subaru'? I predict false.");
console.log( car !='subaru');

// test 4: strict inequality comparsion(false)
console.log("Is car !== 'subaru'? I predict false.");
console.log( car !=='subaru');

// test 5: less than  comparsion(false)
console.log("Is car < 'subaru'? I predict false.");
console.log( car <'subaru');

// test 6: greater than  comparsion(false)
console.log("Is car > 'subaru'? I predict false.");
console.log( car >'subaru');

// test 7: less than or equsl comparsion(true)
console.log("Is car <= 'subaru'? I predict true.");
console.log( car <='subaru');

// test 8: greater than or equal comparsion(true)
console.log("Is car >= 'subaru'? I predict true.");
console.log( car >='subaru');

// test 9: checking truthiness(true)
console.log("Is subaru? I predict true.");
console.log(car);

// test 10: checking truthiness(false)
console.log("Is  !car? I predict false.");
console.log( !car);

