const AppError = require("..//utils/AppErros");

class usersController {
  create(request, response) {
    const { name, email, password } = request.body;
    if (!name) {
      throw new AppError("o nome é obrigatório");
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = usersController;
