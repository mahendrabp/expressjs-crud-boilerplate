const jobModel = require('../models/job'); //import jobModel
const uuidv4 = require('uuid/v4'); //uudi
const client = require('../helpers/redis');

/**
 * @description :
 * @param {request from front end} req
 * @param {response from backend} res
 */

const jobController = {
  getJob: (req, res) => {
    const jobKeyRedis = `${req.originalUrl}`;
    console.log(jobKeyRedis);
    return client.get(jobKeyRedis, (err, result) => {
      if (result) {
        return res.json({
          source: 'cache',
          message: 'this result from cache',
          data: JSON.parse(result)
        });
      } else {
        jobModel
          .getJob(req)
          .then(result => {
            client.setex(jobKeyRedis, 60, JSON.stringify(result));
            return res.json({
              source: 'api',
              message: 'this result from api',
              data: result
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  },

  getJobById: (req, res) => {
    const jobKeyRedis = `${req.originalUrl}`;
    console.log(jobKeyRedis);
    jobModel
      .getJobById(req)
      .then(result => {
        if (result.length < 1) {
          res.status(400).json(`${result}Category ID Not Found`);
        } else {
          return client.get(jobKeyRedis, (err, result) => {
            if (result) {
              return res.json({
                source: 'cache',
                message: 'this result from cache',
                data: JSON.parse(result)
              });
            } else {
              jobModel
                .getJobById(req)
                .then(result => {
                  client.setex(jobKeyRedis, 60, JSON.stringify(result));
                  return res.json({
                    source: 'api',
                    message: 'this result from api',
                    data: result
                  });
                })
                .catch(error => {
                  console.log(error);
                });
            }
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  postJob: (req, res) => {
    const id = uuidv4();
    const jobKeyRedis = `${req.originalUrl}`;
    console.log(jobKeyRedis);
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
        client.del(jobKeyRedis, 60);
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Success to add new job',
          data
        });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  updateJob: (req, res) => {
    const jobKeyRedis = `${req.originalUrl}`;
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
    // jobModel
    //   .updateJob(data, id)
    //   .then(result => {
    //     client.del(jobKeyRedis, 60);
    //     res.json(result);
    //   })
    //   .catch(err => {
    //     res.status(400).json(err);
    //   });

    jobModel
      .getJobById(req)
      .then(result => {
        if (result.length > 0) {
          jobModel
            .updateJob(data, id)
            .then(result => {
              client.del(jobKeyRedis);
              res.status(200).send({
                message: 'success update job'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          res.status(400).json(`Job ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  // deleteJob: (req, res) => {
  //   const jobKeyRedis = `${req.originalUrl}`;
  //   const id = req.params.id;
  //   jobModel
  //     .deleteJob(id)
  //     .then(result => {
  //       client.del(jobKeyRedis, 60);
  //       res.json(result);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // }
  deleteJob: (req, res) => {
    const id = req.params.id;
    jobModel
      .getJobById(req)
      .then(result => {
        if (result.length > 0) {
          jobModel
            .deleteJob(id)
            .then(result => {
              res.status(200).send({
                message: 'success delete job'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
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
