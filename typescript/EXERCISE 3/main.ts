// lowercase:
let person_name:string="malahim aslam";
console.log("lowercase:" , person_name.toLowerCase());

// uppercase
let personname:string=`mahnoor m.fareed`
console.log("uppercase:" , personname. toLocaleUpperCase());

let Person_name:string=`hooriya m.fareed`
console.log("titlecase:" , Person_name.replace(/\b\w/g,c=>c.toUpperCase()));