const getEvents = "SELECT * FROM events";
const getEventsById = "SELECT * FROM events where id = $1";
const addEvent = "INSERT INTO events (title, start_date, end_date, location, details) VALUES ($1, $2, $3, $4, $5)";
const removeEvent = "DELETE FROM events WHERE id = $1";
const updateEvent = "UPDATE events SET title = $1, start_date = $2, end_date = $3, location = $4, details = $5 WHERE id = $6";

module.exports = {
  getEvents,
  getEventsById,
  addEvent,
  removeEvent,
  updateEvent,
};