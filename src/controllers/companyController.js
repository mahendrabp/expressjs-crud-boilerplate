const companyModel = require('../models/company');
const client = require('../helpers/redis');

/**
 * @description :
 * @param {request from front end} req
 * @param {response from backend} res
 */

const companyController = {
  getCompany: (req, res) => {
    const companyKeyRedis = `${req.originalUrl}`;
    return client.get(companyKeyRedis, (err, result) => {
      if (result) {
        return res.json({
          source: 'cache',
          status: 200,
          error: false,
          message: 'this result from cache',
          data: JSON.parse(result)
        });
      } else {
        companyModel
          .getCompany(req)
          .then(result => {
            client.setex(companyKeyRedis, 3600, JSON.stringify(result));
            return res.json({
              source: 'api',
              status: 200,
              error: false,
              message: 'this result from api',
              data: result
            });
          })
          .catch(error => {
            // console.log(error);
            return res.json(error.toString());
          });
      }
    });
  },

  getCompanyById: (req, res) => {
    // const companyKeyRedis = `${req.originalUrl}`;
    companyModel
      .getCompanyById(req)
      .then(result => {
        if (result.length > 0) {
          return res.json({
            source: 'cache',
            status: 200,
            error: false,
            message: 'success get company by id',
            data: result
          });
        } else {
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'company ID not found'
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  postCompany: (req, res) => {
    const { name, logo, location, description } = req.body;

    if (name == null || name == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `name company can't be empty`
      });
    }
    if (logo == null || logo == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `logo company can't be empty`
      });
    }
    if (location == null || location == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `location company can't be empty`
      });
    }
    if (description == null || description == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `description company can't be empty`
      });
    }

    const data = {
      name,
      logo,
      location,
      description
    };
    companyModel
      .postCompany(data)
      .then(result => {
        return res.status(200).json({
          status: 200,
          error: false,
          message: 'success add company'
        });
      })
      .catch(err => {
        return res.status(400).json({
          status: 400,
          error: true,
          message: err
        });
      });
  },

  updateCompany: (req, res) => {
    const id = req.params.id;
    const { name, logo, location, description } = req.body;
    if (name == null || name == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `name company can't be empty`
      });
    }
    if (logo == null || logo == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `logo company can't be empty`
      });
    }
    if (location == null || location == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `location company can't be empty`
      });
    }
    if (description == null || description == '') {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `description company can't be empty`
      });
    }
    const data = {
      name,
      logo,
      location,
      description
    };

    companyModel
      .getCompanyById(req)
      .then(response => {
        if (response.length > 0) {
          companyModel
            .updateCompany(data, id)
            .then(response => {
              return res.status(200).json({
                status: 200,
                error: false,
                message: 'success update company'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'company ID not found'
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  deleteCompany: (req, res) => {
    const id = req.params.id;
    companyModel
      .getCompanyById(req)
      .then(result => {
        if (result.length > 0) {
          companyModel
            .deleteCompany(id)
            .then(result => {
              res.status(200).send({
                message: 'success delete company'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          return res.status(404).json({
            status: 404,
            error: true,
            message: 'company ID not found'
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = companyController;
