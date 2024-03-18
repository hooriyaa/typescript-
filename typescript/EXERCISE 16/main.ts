//  EXERCISE 16:
let guest:string[]=['masood','noor','fareed','hira','hashir']
let absent_guest:string='noor';
let new_guest:string='malahim';
guest[1]=new_guest;
for(let i=0; i<absent_guest.length;i++){
    console.log('Mr/Miss ,'  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow\n');
}

guest.unshift('alsa','hunza','anna');
for(let i=0; i<guest.length; i++){
   console.log('Mr/Miss , '  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow ,we arrange a big dinning table thats we decided to invite 3 more guest\n');
}