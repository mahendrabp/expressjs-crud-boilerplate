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
              message: 'this result from api',
              data: result
            });
          })
          .catch(error => {
            console.log(error);
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
          res.json(result);
        } else {
          res.status(400).json(`${result}Company ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  postCompany: (req, res) => {
    const { name, logo, location, description } = req.body;
    const data = {
      name,
      logo,
      location,
      description
    };
    companyModel
      .postCompany(data)
      .then(result => {
        res.status(200).send({
          message: 'success add company'
        });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  updateCompany: (req, res) => {
    const id = req.params.id;
    const { name, logo, location, description } = req.body;
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
              res.status(200).send({
                message: 'success update company'
              });
            })
            .catch(err => {
              res.status(400).json(err);
            });
        } else {
          res.status(400).json({ message: 'company not found' });
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
          res.status(400).json(`Company ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};

module.exports = companyController;
