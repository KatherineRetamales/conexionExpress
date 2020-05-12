const getUsers = async function(){
    try {
        const users = [
            { 
                name: "Katherine",
                lastName: "Retamales",
                email: "kretamales280@gmail.com"
            },
            {
                name: "Gabriel",
                lastName: "Valdivia",
                email: "g.valdivia@gmail.com"
            },
            {
                name: "Ana",
                lastName: "Martinez",
                email: "ana.m@gmail.com"
            }  
        ]
        console.log(users);
        return users;
    } catch (error) {
        logger.error(err);
        throw err;
    }
}
 
const service = {
    getUsers 
};

module.exports = service;