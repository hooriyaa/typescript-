let guest :string[]=['masood','Noor','fareed','hira','hashir']
for(let i=0; i<guest.length; i++){
    console.log('Mr/Miss,'  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow\n')  
}
let absent_guest:string='noor'
let new_guest:string='malahim'
guest[1]=new_guest;
for(let i=0; i<absent_guest.length;i++){
    console.log('Mr/Miss,'  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow\n')
}
console.log(`Miss,${absent_guest}  \nwill not come tomorrow on dinner`)
