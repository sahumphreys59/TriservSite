const { eventPool } = require('../../db.js');
const queries = require('./queries');

const getEvents = (req, res) => {
  eventPool.query(queries.getEvents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const getEventsById = (req, res) => {
  const id = parseInt(req.params.id);
  eventPool.query(queries.getEventsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const addEvent = (req, res) => {
  const { title, start_date, end_date, location, details } = req.body;
  eventPool.query(queries.addEvent, [title, start_date, end_date, location, details], (error, results) => {
    if (error) throw error;
    res.status(200).redirect('/news');
  });
}

const removeEvent = (req, res) => {
  const id = parseInt(req.params.id);

  eventPool.query(queries.getEventsById, [id], (error, results) => {
    const noEventFound = !results.rows.length;
    if (noEventFound) {
      res.send("Event does not exist in the database");
    }

    eventPool.query(queries.removeEvent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Event removed successfully");
    })
  });
}

const updateEvent = (req, res) => {
  const id  = parseInt(req.params.id);
  const { start_date } = req.body;
  const { end_date } = req.body;
  const { title, location, details } = req.body;

  eventPool.query(queries.getEventsById, [id], (error, results) => {
    const noEventFound = !results.rows.length;
    if (noEventFound) {
      res.send("Event does not exist in the database");
    }

    eventPool.query(queries.updateEvent, [title, start_date, end_date, location, details, id], (error, results) => {
      console.log(id, typeof(id));
      if (error) throw error;
      res.status(200).send('Successfully updated event');
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