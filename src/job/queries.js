const getJobs = "SELECT * FROM jobs";
const getJobById = "SELECT * FROM jobs where id = $1";
const addJob = "INSERT INTO jobs (job_title, location, details, job_type) VALUES ($1, $2, $3, $4)";
const updateJob = "UPDATE jobs SET job_title = $1, location = $2, details = $3, job_type = $4 WHERE id = $5";
const removeJob = "DELETE FROM jobs WHERE id = $1";

module.exports = {
  getJobs,
  getJobById,
  addJob,
  removeJob,
  updateJob
};