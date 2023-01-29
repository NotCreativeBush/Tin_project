const PartsOrderRepository = require('../repository/sequelize/PartsOrderRepository');
const e = require("express");

exports.getPartsOrders = (req, res, next) => {
    PartsOrderRepository.getPartsOrders()
        .then(partsOrders => {
            res.status(200).json(partsOrders);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPartsOrderById = (req, res, next) => {
    const partsOrderId = req.params.partsOrderId;
    PartsOrderRepository.getPartsOrderById(partsOrderId)
        .then(partsOrder => {
            if (!partsOrder) {
                res.status(404).json({
                    message: 'PartsOrder with id:' + partsOrderId + ' not found'
                });
            } else {
                res.status(200).json(partsOrder);
            }
        });
};

exports.createPartsOrder = (req, res, next) => {
    PartsOrderRepository.createPartsOrder(req.body)
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

exports.updatePartsOrder = (req, res, next) => {
    const partsOrderId = req.params.partsOrderId;
    PartsOrderRepository.updatePartsOrder(partsOrderId, req.body)
        .then(result => {
            res.status(200).json({message: 'PartsOrder updated', partsOrder: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};



exports.deletePartsOrder = (req, res, next) => {
    const partsOrderId = req.params.partsOrderId;
    PartsOrderRepository.deletePartsOrder(partsOrderId)
        .then(result => {
            res.status(200).json({message: 'Removed PartsOrder', partsOrder: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};