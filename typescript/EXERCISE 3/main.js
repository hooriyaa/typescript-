"use strict";
// lowercase:
let person_name = "malahim aslam";
console.log("lowercase:", person_name.toLowerCase());
// uppercase
let personname = `mahnoor m.fareed`;
console.log("uppercase:", personname.toLocaleUpperCase());
let Person_name = `hooriya m.fareed`;
console.log("titlecase:", Person_name.replace(/\b\w/g, c => c.toUpperCase()));
