const users = require('../data/users.js');


const getAllUsers = (req, res) => {
  res.json(users)
}

const getUser = (req, res) => {
  const user = users.find(user => user.user_id == req.params.id)
  // error handler if user does not exist with given id
  if(!user) {
  res.status(404)
  res.send(`No user with id ${req.params.id} exists`)
  }
  res.json(user)
}

module.exports = {
  getAllUsers,
  getUser
}