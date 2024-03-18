// EXERCISE 21:
// this program defines an interface called item with two properties : name(string) and price (number)
interface item{
    name:string
    price:number
}
// create two objects
const book:item={
    name:'al chemist',
    price:600
}
const apples:item={
    name:'apples',
    price:300
}
console.log(`book name: ${book.name} ,  price:${book.price}:`);
console.log(`book name: ${apples.name} , price:${apples.price}:`);