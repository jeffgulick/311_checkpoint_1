const userData = require('../data/index');

//GET All users
const getAllUsers = (req, res) => {
    res.json(userData);
};
//GET by id
const getUserById = (req, res) => {
    let check = userData
        .filter(user => user.isActive != false)//filters records not previously deleted
        .find(user => user.id == (req.params.id));

    if(check){
      res.json(check);
    }
    else {
      res.json(`Error 404: ${req.params.id} IS NOT A VALID ID !!!`)
    }  
};
//POST
const createUser = (req, res) => {
    let counter = userData.length +1;
    let newUser = req.body;
    newUser.id = counter;
    userData.push(newUser);
    res.json(userData);
};
//DELETE BY ID
const deleteById = (req, res) => {
    let check = userData
        .filter(user => user.isActive != false)//filters records not previously deleted
        .find(user => user.id == (req.params.id));

if(check){
    check.isActive = false;
    res.send(`User ${check.id} has been DELETED`);
}
else {
  res.json(`Error 400: Bad request, user does not exist!!!`)
}  
}

module.exports = { getAllUsers, getUserById, createUser, deleteById };