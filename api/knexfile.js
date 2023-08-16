const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database2", "database.db"),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb),
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database2",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
};
