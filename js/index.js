// Iteration 1: Names and Input


let hacker1 = "Sergio"
console.log(`The driver's name is ${hacker1}`)
let hacker2= "Bea"
console.log(`The navigator is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length ){
console.log(`The driver has the longest name, it has "${hacker1.length}" characters.`)
}          
else if(hacker1.length < hacker2.length){
console.log(`It seems that the navigator has the longest name, it has "${hacker2.length}" characters.`)
 }
if (hacker2.length === hacker1.length){
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
 }


// Iteration 3: Loops


//3.1
let nombreMayusculas = hacker1.toUpperCase();
let nombreSeparado = nombreMayusculas.split('').join(' ');// split para dividir el texto en un array de caracteres individuales
//join para unir los caracteres del array separados por un espacio.
console.log(`"${nombreSeparado}"`);


//3.2
let nombreReves = hacker1.split('').reverse().join('')
console.log(`"${nombreReves}"`)

//3.3

