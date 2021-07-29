/**
 * @author: AlexanderCDs
 * @description: Async - Await
 * @date: 29/Julio/2021
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

const getInfoUser = async ( id ) => {
    try {
        const employee = await getEmployee(id);
        const amount = await getAmount(id);
        return `Employee ${employee} with amount ${amount}`;
    }catch (err){
        throw err;
    }
    
};


const id = 10;

getInfoUser(id).then(response => console.log(response)).catch(err => console.log(err))
