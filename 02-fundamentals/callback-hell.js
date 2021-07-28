/**
 * @author: AlexanderCDs
 * @description: Callback hell
 * @date: 27/Julio/2021
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

const getEmployee = ( id, callback ) => {
    const employee = employees.find(e => e.id === id);
    if(employee){
        callback(null, employee.name);
    } else {
        callback(`Employee ${id} not found`);
    }
};
  
const getPayment = ( id, callback ) => {
    const amount = payments.find(p => p.id === id)?.amount;
    if(amount){
        callback(null, amount);
    } else {
        callback(`Payment user ${id} not found`);
    }
}
const id = 3;

getEmployee( id, (err, employee) => {
    if( err ) {
        return console.log(err)
    } 
    getPayment( id, (err, amount) => {
        if( err ) {
            return console.log(err)
        }
        console.log( 'Employee:', employee, 'have amount:', amount );
    });
});