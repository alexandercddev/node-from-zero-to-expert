/**
 * @author: AlexanderCDs
 * @description: Callback
 * @date: 27/Julio/2021
 */

/** función que manda a llamar otra 
 * función pasada por parametro 
 * */
const getUserById = ( id, callback ) => {
    const user = {
        id,
        nombre: 'Alexander'
    };

    setTimeout( () => {
        callback(user);
    }, 1500) 
}

getUserById( 10, (user) => {
    console.log(user);
})