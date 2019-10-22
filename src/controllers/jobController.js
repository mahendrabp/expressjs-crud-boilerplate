const jobModel = require('../models/job'); //import jobModel
const uuidv4 = require('uuid/v4'); //uudi

const jobController = {
  getJob: (req, res) => {
    jobModel
      .getJob(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getJobById: (req, res) => {
    jobModel
      .getJobById(req)
      .then(result => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(400).json(`Job ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
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
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
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
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`Job ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  deleteJob: (req, res) => {
    const id = req.params.id;
    jobModel
      .deleteJob(id)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`Job ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = jobController;
