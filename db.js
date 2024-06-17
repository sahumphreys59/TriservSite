const Pool = require('pg').Pool;

const eventPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "events",
  password: "password",
  port: 5432
});

const jobPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jobs",
  password: "password",
  port: 5432
});


module.exports = { eventPool, jobPool };