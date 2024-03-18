// Exercise 45:
// Installation completed:
type car={
    manufacture:string; 
    model:string;
    [key:string]:any;
}

function createcar(manufacture:string,model:string,optional:Record<string, any>): car {
    return{
        manufacture,
           model,
        ...optional,
    }
}
const myCar:car=createcar("honda","civic", {color:'black' ,year:"2022"})
console.log(myCar);

