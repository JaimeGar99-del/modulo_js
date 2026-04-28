const name = prompt("Ingresar Nombre", "name");
let age = prompt("Ingresar edad", "age");
console.log(name);
console.log(age)
const error = "Error: porfavor, ingresa una edad valida en numeros"
const Vacio = "Error: porfavor ingresa un valor valido"
if (isNaN(age)){
    console.log(error);
    alert(error);
}else if(age.length === 0 || name.length === 0){
    console.log(Vacio);
    alert(Vacio);
}else if(age <= 18){
    alert(`hola ${name} tienes ${age} eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}else{
    alert(`hola ${name} tienes ${age}  eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación`);
}
