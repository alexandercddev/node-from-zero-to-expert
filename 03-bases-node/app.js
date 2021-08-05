/**
 * @author: AlexanderCDs
 * @description: Bases de node
 * @date: 29/Julio/2021
 */
const fs = require('fs');

console.clear(); 
const base = 5; 
console.log(`
******************************
        Tabla del ${base}      
******************************
`); 
let salida = ''; 
for( let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base*i}\n`;
}

console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`tabla-${base} creado`)
});