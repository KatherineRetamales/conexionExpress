const service = require('./service');

const getUsers = async function(req, res, next){
    try {
        const getUsers = await service.getUsers();
        res.json(getUsers);
    } catch (error) {
        next(error);
    }
}

const controller = {
    getUsers
};

module.exports = controller;