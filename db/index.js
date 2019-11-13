const pgp = require("pg-promise")();

const db = pgp(
  process.env.DATABASE_URL ||
    // modify the following string with your user name:
    // || 'postgres://<username>@localhost:5432/<database name>');
    "postgres://ibrahimcisse@localhost:5432/pokemon_db_test"
);

module.exports = db;
