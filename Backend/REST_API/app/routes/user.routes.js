module.exports = app => {
    const user = require("../controllers/user.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", user.create);
  
    //Retrieve a single user with userid
    router.get("/:username", user.findUsername);

    // Retrieve all users
    router.get("/", user.findAll);

    // Update a User with username
    router.put("/:username", user.update);
  
    app.use("/api/user", router);
  };