/**
 * @author: AlexanderCDs
 * @description: Ciclo de eventos de Node 
 * @date: 27/Julio/2021
 */

console.log('Inicio programa');

setTimeout(() => {
    console.log('Primer timeOut')
}, 3000);

setTimeout(() => {
    console.log('Segundo timeOut')
}, 0); 

setTimeout(() => {
    console.log('Tercer timeOut')
}, 0);

console.log('Fin programa');