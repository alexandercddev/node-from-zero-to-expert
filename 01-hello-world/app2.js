/**
 * @author: AlexanderCDs
 * @description: Ciclo de eventos de Node 
 * @date: 27/Julio/2021
 */

/** Arrow function algo similar a un function normal */
const saludar = (name) => {
    // `Saludos ${name}` es igual a 'Saludos' + name
    return `Saludos ${name}`;
};

console.log(saludar('Alexander'));