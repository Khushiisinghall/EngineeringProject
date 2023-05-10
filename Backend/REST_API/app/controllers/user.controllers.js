const db = require("../models");
const User = db.user;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.name || !req.body.password) {
    res.status(400).send({ message: "Please provide all required fields!" });
    return;
  }

  // Create a new User
  const user = new User({
    username:req.body.username,
    userid:req.body.userid,
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
    gender:req.body.gender,
    isactive:req.body.isactive,
    role:req.body.role,
    published: req.body.published ? req.body.published : false
  });

  // Save User in the database
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new user."
      });
    });
};

// Retrieve all Heart_Rate from the database.
exports.findAll = (req, res) => {
  User.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

//Find a single User with an username
exports.findUsername = (req, res) => {
  const username = req.params.username;

  User.findOne({username: username})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found the user with username " + username });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving the user with username=" + username});
    });
};

// Update a User by the username in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const username = req.params.username;

  User.findOneAndUpdate({username: username}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with username=${username}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with username=" + username
      });
    });
};
