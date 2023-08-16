require("express-async-errors");

const database = require('./database2/sqlite');
const migrationsRun = require("./database2/sqlite/migrations");

const AppError = require("./utils/AppErros");
const express = require("express");

const routes = require("./routes");

database();
migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = 3333;
app.listen(port, () => console.log(`server is running on port ${port}`));
