// Exercise 32:
let currentUsers:string[]=['hoor','noor','hira','malahim','hashir'];

let newUsers:string[]=['hoor','masood','anna','malahim','alsa'];

newUsers.forEach(newUsersname =>{
    let lowercase:string=newUsersname.toLowerCase();
    if(currentUsers.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsersname } is not available. please write a different username`);
    }
    else{
        console.log(`The Username ${newUsersname} is available`)
    }
})  