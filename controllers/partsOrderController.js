const PartsOrderRepository = require("../repository/sequelize/PartsOrderRepository");
const CarRepository = require('../repository/sequelize/CarRepository');
const MechanicRepository = require('../repository/sequelize/MechanicRepository');
exports.showPartsOrderList = (req, res, next) => {
    PartsOrderRepository.getPartsOrders()
        .then(parts => {
            res.render('pages/PartsOrder/list', {
                partsOrder: parts,
                navLocation: 'partsOrder',
                pageTitle: req.__('partsOrder.list.pageTitle')
            });
        });


}


exports.showAddPartsOrderForm = (req, res, next) => {
    let  allMechanics;
    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics = mechs;
            res.render('pages/PartsOrder/form', {
                partsOrder: {},

                pageTitle: req.__('partsOrder.form.add.pageTitle'),
                formMode: 'createNew',
                allMechanics: allMechanics,

                btnLabel: req.__('partsOrder.form.add.btnLabel'),

                formAction: '/partsOrder/add',
                navLocation: 'partsOrder',
                validationErrors: []
            });
        });
}


exports.showEditPartsOrderForm = (req, res, next) => {
    const partId = req.params.partsOrderId;
    let  allMechanics;

    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics = mechs;
            return CarRepository.getCars();
        })

        .then(partsOrder => {

                res.render('pages/PartsOrder/form', {
                    partsOrder: partsOrder,
                    pageTitle: req.__('partsOrder.form.edit.pageTitle'),
                    formMode: 'edit',
                    btnLabel: req.__('partsOrder.form.edit.btnLabel'),
                    allMechanics: allMechanics,

                    formAction: '/partsOrder/edit',
                    navLocation: 'partsOrder',
                    validationErrors: []
                });
            }
        );
}


exports.showPartsOrderDetails = (req, res, next) => {
    const partId = req.params.partsOrderId;
    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics = mechs;
            return CarRepository.getCars();
        })

        .then(partsOrder => {
                res.render('pages/PartsOrder/form', {
                    partsOrder: partsOrder,
                    pageTitle: req.__('partsOrder.form.details.pageTitle'),
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: 'partsOrder',
                    validationErrors: []
                });
            }
        );
}

exports.showPartsOrderListMechanic = (req, res, next) => {
    let loggedUser=req.session.loggedUser;
    PartsOrderRepository.getPartsOrdersForMechanic(loggedUser._id)
        .then(parts => {
            res.render('pages/PartsOrder/list', {
                partsOrder: parts,
                navLocation: 'partsOrder',
                pageTitle: req.__('partsOrder.list.pageTitle')
            });
        });


}

exports.addPartsOrder = (req, res, next) => {
    let allMechanics;
    const partData = {...req.body};
    MechanicRepository.getMechanics()

        .then(mechs => {
            allMechanics=mechs
            PartsOrderRepository.createPartsOrder(partData)
                .then(result => {
                    res.redirect('/partsOrder');
                })
                .catch(err => {
                    res.render('pages/PartsOrder/form', {
                        partsOrder: partData,

                        pageTitle: req.__('partsOrder.form.add.pageTitle'),
                        formMode: 'createNew',


                        btnLabel: req.__('partsOrder.form.add.btnLabel'),
                        allMechanics: allMechanics,
                        formAction: '/partsOrder/add',
                        navLocation: 'partsOrder',
                        validationErrors: err.errors
                    })
                    ;
                })
        });
}
exports.updatePartsOrder = (req, res, next) => {
    let  allMechanics;
    const partId = req.body._id;
    const partData = {...req.body};
    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics=mechs
            PartsOrderRepository.updatePartsOrder(partId, partData)
                .then(result => {
                    res.redirect('/partsOrder');
                }).catch(err => {
                res.render('pages/PartsOrder/form', {
                    partOrder: partData,

                    pageTitle: req.__('partsOrder.form.edit.pageTitle'),
                    formMode: 'edit',
                    allMechanics: allMechanics,

                    btnLabel: req.__('partsOrder.form.edit.btnLabel'),

                    formAction: '/partsOrder/edit',
                    navLocation: 'partsOrder',
                    validationErrors: err.errors
                })
                ;
            })
        });
}

exports.changePartsOrderStatusTrue = (req, res, next) =>{
    const partId = req.params.partsOrderId;
    PartsOrderRepository.changePartsOrderStatusTrue(partId)
        .then(()=>{
            res.redirect('/partsOrder/mechaniclist');
        });
};

exports.changePartsOrderStatusFalse = (req, res, next) =>{
    const partId = req.params.partsOrderId;
    PartsOrderRepository.changePartsOrderStatusFalse(partId)
        .then(()=>{
            res.redirect('/partsOrder/mechaniclist');
        });
};

exports.deletePartsOrder = (req, res, next) => {
    const partId = req.params.partsOrderId;
    PartsOrderRepository.deletePartsOrder(partId)
        .then(() => {
            res.redirect('/partsOrder');
        });
};