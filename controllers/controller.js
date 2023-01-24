const _ = require("lodash");
// const { check, validationResult } = require("express-validator");

const users = [];

//Get Request
const getAllUsers = (req, res) => {
  if (users.length) {
    res.status(200).json({ message: "success", data: users });
  } else {
    res.status(400).json({ message: "no user created" });
  }
};


//Post request
const createUser = (req, res) => {
  if (users.length > 0) {
    const user = _.find(users, (i) => i.email == req.body.email);

    if (user) {
      res.status(400).json({ message: "User already created", data: user });
    } else {
      const id = users.length;
      let newUser = { id, ...req.body };

      users.push(newUser);
      res
        .status(200)
        .json({ message: "User created successfully", data: newUser });
    }
  } else {
    const id = users.length;
    let newUser = { id, ...req.body };

    users.push(newUser);
    res
      .status(200)
      .json({ message: "User created successfully", data: newUser });
  }
};

//PUT request
const updateUser = (req, res) => {
  let id = req.params.id;
  let index = _.findIndex(users, (i) => i.id == id);

  if (index >= 0) {
    let updatedUser = { id, ...req.body };

    users[index] = updatedUser;

    res
      .status(200)
      .json({ message: "User updated successfully", user: users[index] });
  } else {
    res.status(400).json({ message: "Incorrect Userid" });
  }
};

//Patch Request
const updateUserById = (req, res) => {
  let id = req.params.id;
  let index = _.findIndex(users, (i) => i.id == id);

  if (index >= 0) {
    const { email, password } = req.body;

    if(email) {
        users[index].email = email;
    }
    if(password) {
        users[index].password = password;
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: users[index] });
  } else {
    res.status(400).json({ message: "Incorrect Userid" });
  }
};

// Delete request
const deleteUser = (req, res) => {
  let id = req.params.id;
  let index = _.findIndex(users, (i) => i.id == id);

  if (index >= 0) {
    users.splice(index, 1);

    res
      .status(200)
      .json({ message: "User deleted successfully", data: users });
  } else {
    res.status(400).json({ message: "Incorrect Userid" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  updateUserById,
  deleteUser,
};
