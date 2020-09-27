const userData = require('../data/index');
const sampleUser = require('../data/sampleUser');

//GET All users
const getAllUsers = (req, res) => {
  let allUsers = userData.filter(user => user.isActive != false)//finds active users
  res.json(allUsers);
    // res.json(userData);
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
//UPDATE USER
const updateUser = (req, res) => {
  let check = userData
    .filter(user => user.isActive != false)//filters records not previously deleted
    .find(user => user.id == (req.params.id));

  if(check){
    // check.name = req.body.name;
    check.name = sampleUser.name;
    check.username = sampleUser.username;
    check.email = sampleUser.email;
    check.address = sampleUser.address;
    check.phone = sampleUser.phone;
    check.website = sampleUser.website;
    check.company = sampleUser.company;
    res.json(userData)
  } 
  else {
    res.json(`Error 400: Bad request, user does not exist!!!`)
  }
}
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

module.exports = { getAllUsers, getUserById, createUser, deleteById, updateUser };