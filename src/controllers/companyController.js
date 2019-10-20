const companyModel = require('../models/company');

const companyController = {
  getCompany: (req, res) => {
    companyModel
      .getCompany(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getCompanyById: (req, res) => {
    companyModel
      .getCompanyById(req)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
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
        res.json(result);
      })
      .catch(err => {
        console.log(err);
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
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteCompany: (req, res) => {
    const id = req.params.id;

    companyModel
      .deleteCompany(id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = companyController;
