// Exercise 17: 
let guest:string[]=['masood','noor','fareed','hira','hashir']
let absent_guest:string='noor'
let new_guest:string='malahim'
guest[1]=new_guest;
// for(let i=0; i<absent_guest.length;i++){
//     console.log('Mr/Miss ,'  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow\n')
// }
//  console.log(`Miss,${absent_guest}  \nwill not come tomorrow on dinner`)
guest.unshift('alsa','hunza','anna')
// for(let i=0; i<guest.length; i++){
//    console.log('Mr/Miss , '  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow ,we arrange a big dinning table thats we decided to invite 3 more guest\n')
// }
console.log('unfortunately we are unable to arrange big dinning table , so only two people are invite ')
while( guest.length>2){
    let remove_guest=guest.pop();
    console.log(`sorry mr/miss  ${remove_guest} \n you are not invited on dinner`)
}
for(let i=0; i<guest.length; i++){
    console.log('Mr/Miss ' + guest[i] + ' you are still invited on dinner' )
}
guest.splice(0,2)
console.log(guest)
