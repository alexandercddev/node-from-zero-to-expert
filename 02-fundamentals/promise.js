/**
 * @author: AlexanderCDs
 * @description: Promesas
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

const id = 3;
/*getEmployee(id)
    .then(employee => console.log(employee))
    .catch(err => console.log(err))

getAmount(id)
    .then(amount => console.log(amount))
    .catch(err => console.log(err))*/

getEmployee(id)
    .then(employee => {
        getAmount(id)
            .then(amount => {
                console.log('Employee:', employee, 'your amount is:', amount)
            })
            .catch(err => {
                console.log('Employee:', employee, err)
            }) 
    })
    .catch(err => console.log(err))