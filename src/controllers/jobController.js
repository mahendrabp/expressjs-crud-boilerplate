const jobModel = require('../models/job');
const uuidv4 = require('uuid/v4');

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
  getJobById: (req, res) => {
    jobModel
      .getJobById(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postJob: (req, res) => {
    const id = uuidv4();
    const {
      name,
      description,
      salary,
      location,
      category_id,
      company_id,
      updated_at,
      created_at
    } = req.body;
    const data = {
      id,
      name,
      description,
      salary,
      location,
      category_id,
      company_id,
      updated_at,
      created_at
    };
    jobModel
      .postJob(data)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateJob: (req, res) => {
    const id = req.params.id;
    const date = new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    // const date1 = date.getTime();
    const updated_at = date;
    const {
      name,
      description,
      salary,
      location,
      category_id,
      company_id
    } = req.body;
    const data = {
      id,
      name,
      description,
      salary,
      location,
      category_id,
      company_id,
      updated_at
    };
    jobModel
      .updateJob(data, id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteJob: (req, res) => {
    const id = req.params.id;
    jobModel
      .deleteJob(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = jobController;
