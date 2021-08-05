/**
 * @author: AlexanderCDs
 * @description: Mutiplicar
 * @date: 05/Agosto/2021
 */
const fs = require('fs');

const createFile = async (base = 5) => {
    try{
        let salida = ''; 
        console.log('******************************'); 
        console.log('        Tabla del: ', base)
        console.log('******************************'); 
        for( let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        } 
        console.log(salida) 
        fs.writeFileSync(`tabla-${base}.txt`, salida ); 
        return (`tabla-${base}.txt`);
    }catch(err){
        throw err;
    }
}

module.exports = {
    createFile
}