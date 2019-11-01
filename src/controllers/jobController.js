const jobModel = require('../models/job'); //import jobModel
const uuidv4 = require('uuid/v4'); //uudi
const client = require('../helpers/redis');
const moment = require('moment');
const { pagination } = require('../helpers/pagination');

/**
 * @description :
 * @param {request from front end} req
 * @param {response from backend} res
 */

const jobController = {
  getJob: (req, res) => {
    const jobKeyRedis = `${req.originalUrl}`;
    console.log(jobKeyRedis);
    const page = pagination(req);
    return client.get(jobKeyRedis, (err, result) => {
      if (result) {
        var data = JSON.parse(result);
        let count_perpage = data.length;

        return res.json({
          source: 'cache',
          count_perpage: count_perpage,
          error: false,
          message: 'this result from cache',
          data: data
        });
      } else {
        jobModel
          .getJob(req, page)
          .then(result => {
            let count_perpage = result.length;
            client.setex(jobKeyRedis, 30, JSON.stringify(result));
            return res.json({
              source: 'api',
              count_perpage: count_perpage,
              error: false,
              message: 'this result from api',
              data: result
            });
          })
          .catch(err => {
            return res.status(404).json({
              status: 404,
              error: true,
              message: err
            });
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
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'Job ID not found'
          });
        } else {
          return client.get(jobKeyRedis, (err, result) => {
            if (result) {
              return res.json({
                source: 'cache',
                error: false,
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
                    error: false,
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
        return res.status(400).json({
          status: 400,
          error: true,
          message: 'error'
        });
      });
  },

  postJob: (req, res) => {
    const id = uuidv4();
    const jobKeyRedis = `${req.originalUrl}`;
    // console.log(jobKeyRedis);
    // const date = new Date(Date.now())
    //   .toISOString()
    //   .slice(0, 19)
    //   .replace('T', ' ');
    // const date1 = date.getTime();
    const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    const updated_at = date;
    const created_at = date;
    const {
      name,
      description,
      salary,
      location,
      category_id,
      company_id
    } = req.body;

    if (name == null || name == '' || name === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `name job can't be empty`
      });
    }
    if (description == null || description == '' || description === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `description job can't be empty`
      });
    }
    if (salary == null || salary == '' || salary === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `salary job can't be empty`
      });
    }
    if (location == null || location == '' || location === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `location job can't be empty`
      });
    }
    if (category_id == null || category_id == '' || category_id === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `category job can't be empty`
      });
    }
    if (company_id == null || company_id == '' || company_id === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `company job can't be empty`
      });
    }

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
    // const date = new Date()
    //   .toISOString()
    //   .slice(0, 19)
    //   .replace('T', ' ');
    // // const date1 = date.getTime();
    const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const updated_at = date;
    const {
      name,
      description,
      salary,
      location,
      category_id,
      company_id
    } = req.body;
    if (name == null || name == '' || name === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `name job can't be empty`
      });
    }
    if (description == null || description == '' || description === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `description job can't be empty`
      });
    }
    if (salary == null || salary == '' || salary === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `salary job can't be empty`
      });
    }
    if (location == null || location == '' || location === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `location job can't be empty`
      });
    }
    if (category_id == null || category_id == '' || category_id === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `category job can't be empty`
      });
    }
    if (company_id == null || company_id == '' || company_id === null) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `company job can't be empty`
      });
    }
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
              res.status(200).json({
                status: 200,
                error: false,
                message: 'Success to update new job',
                data
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          res.status(404).json({
            status: 200,
            error: false,
            message: 'job id not found'
          });
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
              res.status(200).json({
                status: 200,
                error: false,
                message: 'Success to delete job',
                data
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          res.status(404).json({
            status: 404,
            error: false,
            message: 'job id not found'
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = jobController;
