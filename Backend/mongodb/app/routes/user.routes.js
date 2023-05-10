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
    // Retrieve all heart rates with certain user id
    //router.get("/:userID", heart_rate.findAllByUserId);
  
    // Retrieve all published skill_humans
    //router.get("/published", heart_rate.findAllPublished);
  


  
    // // Delete a Tutorial with id
    // router.delete("/:id", heart_rate.delete);
  
    // Delete a user
   // router.delete("/", heart_rate.deleteAll);
  
    app.use("/api/user", router);
  };