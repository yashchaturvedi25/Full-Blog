const express= require('express');

const userRoutes= express.Router()

//register

//POST/api/v1/users/register
userRoutes.post("/register", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User registered",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //POST/api/v1/users/login
  app.post("/login", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User login",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //GET/api/v1/users/:id
  app.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User Details",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //GET/api/v1/users/profile/:id
  app.get("/profile/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User profile",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //PUT/api/v1/users/profile-photo-upload/:id
  app.put("/profile-photo-upload/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User profile image upload",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //PUT/api/v1/users/profile-photo-upload/:id
  app.put("/cover-photo-upload/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User cover image upload",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //PUT/api/v1/users/update-password/:id
  app.put("/update-password/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User password update",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //PUT/api/v1/users/update/:id
  app.put("/update/:id", async (req, res) => {
      try {
        res.json({
          status: "success",
          user: "User update",
        });
      } catch (error) {
        res.json(error);
      }
    });
  
  //GET/api/v1/users/logout
  app.get("/logout", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User logout",
      });
    } catch (error) {
      res.json(error);
    }
  });
module.exports= userRoutes;