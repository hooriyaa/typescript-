// More tests
let car:string='subaru'
let age:number=25
let number:number[]=[1,2,3,4]

// test for equality or unequality with string
// test 1: equality (true)
console.log("Is car =='subaru? I predict true.")
console.log( car =='subaru');

// test 2: strict equality (true)
console.log("Is car ==='subaru? I predict true.")
console.log( car ==='subaru');

// test 3:  inequality (false)
console.log("Is car !='subaru? I predict false.")
console.log( car !='subaru');

// test 4:  inequality (false)
console.log("Is car !=='subaru? I predict false.")
console.log( car !=='subaru');

// test 5: lowercase conversion(true)  
console.log("Is car.tolowercase() =='subaru? I predict true.")
console.log(car.toLowerCase() =='subaru');

// test 6: lowercase conversion(true)  
console.log("Is car=== car.tolowercase()  I predict true.")
console.log(car ===car.toLowerCase());

// numerical tests
// test 7: equality(true)
console.log("Is age ==25? I predict true.")
console.log(age==25)

// test 8: Inequality(false)
console.log("Is age !=25? I predict false.")
console.log(age!=25)

// test 9: Greater (false)
console.log("Is age >30? I predict false.")
console.log(age>30)

// test 10: less than or equal(true)
console.log("Is age <=25? I predict true.")
console.log(age<=25)

// logical operators
// test 11: And (true)
console.log("Is age>20 && age<30 ? I predict true.")
console.log( age>20 && age<30 )

// test 12: or (false)
console.log("Is age >30 || age<18? I predict false.")
console.log(age >30 || age<18 )

// array testes:
// test 13:
console.log("2 in number? I predict true")
console.log(2 in number)

// test 13:
console.log("6 in number? I predict false")
console.log(6  in number)