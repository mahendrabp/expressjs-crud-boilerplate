const jobModel = require('../models/job');

const jobController = {
  getJob: (req, res) => {
    jobModel
      .getJob(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getJobById: () => {},
  postJob: () => {},
  updateJob: () => {},
  deleteCompany: () => {}
};

module.exports = jobController;
