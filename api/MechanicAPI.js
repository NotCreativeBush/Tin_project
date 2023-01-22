const MechanicRepository = require('../repository/sequelize/MechanicRepository');
const e = require("express");

exports.getMechanics = (req, res, next) => {
    MechanicRepository.getMechanics()
        .then(mechs => {
            res.status(200).json(mechs);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getMechanicById = (req, res, next) => {
    const mechanicId = req.params.mechanicId;
    MechanicRepository.getMechanicById(mechanicId)
        .then(mechanic => {
            if (!mechanic) {
                res.status(404).json({
                    message: 'Mechanic with id:' + mechanicId + ' not found'
                });
            } else {
                res.status(200).json(mechanic);
            }
        });
};

exports.createMechanic = (req, res, next) => {
    MechanicRepository.createMechanic(req.body)
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

exports.updateMechanic = (req, res, next) => {
    const mechanicId = req.params.mechanicId;
    MechanicRepository.updateMechanic(mechanicId, req.body)
        .then(result => {
            res.status(200).json({message: 'Mechanic updated', mechanic: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteMechanic = (req, res, next) => {
    const mechanicId = req.params.mechanicId;
    MechanicRepository.deleteMechanic(mechanicId)
        .then(result => {
            res.status(200).json({message: 'Removed Mechanic', mechanic: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};