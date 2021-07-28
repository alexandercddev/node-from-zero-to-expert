/**
 * @author: AlexanderCDs
 * @description: Template string
 * @date: 27/Julio/2021
 */

const deadpool ={
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    getName (params) {
        return `${ this.name } ${ this.lastName } ${ this.power }`
    }
};

//const name = deadpool.name;
//const lastName = deadpool.lastName;
//const power = deadpool.power;


// en funciones
function printHeroe( { name, lastName, power, old = 0 } ) { 
    console.log(name, lastName, power, old);
}

//const { name, lastName, power } = deadpool; 

//console.log(name, lastName, power)

//printHeroe(deadpool)

const heroes = ['Deapool', 'Superman', 'Batman']

const [ , h2,  ] = heroes;

console.info(h2)