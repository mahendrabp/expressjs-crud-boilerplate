const companyModel = require('../models/company');

const companyController = {
  getCompany: (req, res) => {
    companyModel
      .getCompany(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

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
