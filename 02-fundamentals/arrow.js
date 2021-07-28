/**
 * @author: AlexanderCDs
 * @description: Flechas
 * @date: 27/Julio/2021
 */

/** función normal 
function sum(a, b = 10) {
    return a + b;
}**/

/** cuando sea una sola linea se puede colocar 
 * la arrow function en una sola linea 
 * */
const sum = (a = 0, b = 0) => a + b;

const saludar = () => "Hola Mundo";

console.log(sum(5))

console.log(saludar())