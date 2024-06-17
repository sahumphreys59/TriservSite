const { jobPool } = require('../../db.js');
const queries = require('./queries');

const getJobs = (req, res) => {
  jobPool.query(queries.getJobs, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const getJobById = (req, res) => {
  const id = parseInt(req.params.id);
  jobPool.query(queries.getJobById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

const addJob = (req, res) => {
  const {job_title, location, details, job_type } = req.body;
  jobPool.query(queries.addJob, [job_title, location, details, job_type], (error, results) => {
    if (error) throw error;
    res.status(200).send('Job successfully created');
  });
}

const removeJob = (req, res) => {
  const id = parseInt(req.params.id);

  jobPool.query(queries.getJobById, [id], (error, results) => {
    const noJobFound = !results.rows.length;
    if (noJobFound) {
      res.send("Job does not exist in the database");
    }

    jobPool.query(queries.removeJob, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Job removed successfully");
    })
  });
}

const updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const { job_title, location, details, job_type } = req.body;

  jobPool.query(queries.getJobById, [id], (error, results) => {
    const noJobFound = !results.rows.length;
    if (noJobFound) {
      res.send("Job does not exist in the database");
    }

    jobPool.query(queries.updateJob, [job_title, location, details, job_type, id], (error, results) => {
      if (error) throw error;
      res.status(200).send('Successfully updated job');
    });
  });
}

module.exports = {
  getJobs,
  getJobById,
  addJob,
  removeJob,
  updateJob
};