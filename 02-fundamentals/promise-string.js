/**
 * @author: AlexanderCDs
 * @description: Promesas en cadenas
 * @date: 28/Julio/2021
 */

 const employees = [
    {
        id: 1,
        name: 'Alexander',
    },
    {
        id: 2,
        name: 'Cindy',
    },
    {
        id: 3,
        name: 'Yoel',
    }
];

const payments = [
    {
        id: 1,
        amount: 1000,
    },
    {
        id: 2,
        amount: 1560,
    }
];

const getEmployee = ( id ) => { 
    return new Promise((resolve, reject) => {
        const employeeName = employees.find(e => e.id === id)?.name; 
        (employeeName) 
            ? resolve( employeeName )
            : reject( `Not found employee with ID ${id}` );
    }); 
};

const getAmount = ( id ) => { 
    return new Promise((resolve, reject) => {
        const amount = payments.find(a => a.id === id)?.amount; 
        (amount) 
            ? resolve( amount )
            : reject( `Not found amount with ID ${id}` );
    }); 
};

const id = 12;
let name;
getEmployee(id)
    .then(employee => {
        name = employee;
        return getAmount(id); 
    })
    .then(amount =>  console.log(`Employee ${name} amount ${amount}`) ) 
    .catch(err => console.log(err))