const pool = require('../../db.js');
const queries = require('./queries');

const getEvents = (req, res) => {
  pool.query(queries.getEvents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const getEventsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEventsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const addEvent = (req, res) => {
  const { title, start_date, end_date, location, details } = req.body;

  pool.query(queries.addEvent, [title, start_date, end_date, location, details], (error, results) => {
    if (error) throw error;
    res.status(200).send("Event created successfully");
  });

}

const removeEvent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getEventsById, [id], (error, results) => {
    const noEventFound = !results.rows.length;
    if (noEventFound) {
      res.send("Event does not exist in the database");
    }

    pool.query(queries.removeEvent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Event removed successfully");
    })
  });
}

const updateEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, start_date, end_date, location, details } = req.body;

  pool.query(queries.getEventsById, [id], (error, results) => {
    const noEventFound = !results.rows.length;
    if (noEventFound) {
      res.send("Event does not exist in the database");
    }

    pool.query(queries.updateEvent, [title, start_date, end_date, location, details, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
}

module.exports = {
  getEvents,
  getEventsById,
  addEvent,
  removeEvent,
  updateEvent,
};