const ManagerRepository = require('../repository/sequelize/ManagerRepository');
const e = require("express");

exports.getManagers = (req, res, next) => {
    ManagerRepository.getManagers()
        .then(mechs => {
            res.status(200).json(mechs);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getManagerById = (req, res, next) => {
    const managerId = req.params.managerId;
    ManagerRepository.getManagerById(managerId)
        .then(manager => {
            if (!manager) {
                res.status(404).json({
                    message: 'Manager with id:' + managerId + ' not found'
                });
            } else {
                res.status(200).json(manager);
            }
        });
};

exports.createManager = (req, res, next) => {
    ManagerRepository.createManager(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.status) {
                err.status = 500;
            }
            next(err);
        });
}

exports.updateManager = (req, res, next) => {
    const managerId = req.params.managerId;
    ManagerRepository.updateManager(managerId, req.body)
        .then(result => {
            res.status(200).json({message: 'Manager updated', manager: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteManager = (req, res, next) => {
    const managerId = req.params.managerId;
    ManagerRepository.deleteManager(managerId)
        .then(result => {
            res.status(200).json({message: 'Removed Manager', manager: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};