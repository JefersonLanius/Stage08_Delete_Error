const { Router } = require("express");

const usersController = require("../controllers/usersController");

const userRoutes = Router();

const userController = new usersController();

userRoutes.post("/", userController.create);

module.exports = userRoutes;
