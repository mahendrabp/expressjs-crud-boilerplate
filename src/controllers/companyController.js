const companyModel = require('../models/company');
const client = require('../helpers/redis');

/**
 * @description :
 * @param {request from front end} req
 * @param {response from backend} res
 */

const companyController = {
  getCompany: (req, res) => {
    const companyKeyRedis = 'root:companies';
    return client.get(companyKeyRedis, (err, result) => {
      if (result) {
        return res.json({ source: 'cache', data: JSON.parse(result) });
      } else {
        companyModel
          .getCompany(req)
          .then(result => {
            client.setex(companyKeyRedis, 3600, JSON.stringify(result));
            return res.json({ source: 'api', data: result });
          })
          .catch(error => {
            console.log(error);
            return res.json(error.toString());
          });
      }
    });
  },

  // getCategory: (req, res) => {
  //   const categoryKeyRedis = 'root:categories';
  //   return client.get(categoryKeyRedis, (err, result) => {
  //     if (result) {
  //       return res.json({ source: 'cache', data: JSON.parse(result) });
  //     } else {
  //       categoryModel
  //         .getCategory(req)
  //         .then(result => {
  //           client.setex(categoryKeyRedis, 3600, JSON.stringify(result));
  //           return res.json({ source: 'api', data: result });
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           return res.json(error.toString());
  //         });
  //     }
  //   });
  // },

  getCompanyById: (req, res) => {
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
        res.status(200).json(result);
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
      .updateCompany(data, id)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(400).json(`Company ID Not Found`);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  deleteCompany: (req, res) => {
    const id = req.params.id;

    companyModel
      .deleteCompany(id)
      .then(result => {
        if (result.length > 0) {
          res.json(result);
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
