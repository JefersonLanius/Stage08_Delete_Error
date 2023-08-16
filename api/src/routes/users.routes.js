const { Router } = require("express");

const usersController = require("../controllers/usersController");

const userRoutes = Router();

const userController = new usersController();

userRoutes.post("/", userController.create);
userRoutes.put("/:id", userController.update);

module.exports = userRoutes;
