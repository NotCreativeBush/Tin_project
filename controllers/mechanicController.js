const MechanicRepository = require('../repository/sequelize/MechanicRepository');
const CarRepository = require("../repository/sequelize/CarRepository");
exports.showMechanicList = (req, res, next) => {
    MechanicRepository.getMechanics()
        .then(mechs => {
            res.render('pages/mechanics/list', {
                mechanics: mechs,
                navLocation: "mechanics"
            });
        })


}


exports.showAddMechanicForm = (req, res, next) => {
    res.render('pages/mechanics/form', {
        mechanic: {},
        pageTitle: 'New mechanic',
        formMode: 'createNew',
        btnLabel: 'Add Mechanic',
        formAction: '/mechanics/add',
        navLocation: "mechanics",
        validationErrors: []
    });
}


exports.showEditMechanicForm = (req, res, next) => {
    const mechId = req.params.mechanicId;
    MechanicRepository.getMechanicById(mechId)
        .then(mechanic => {
                res.render('pages/mechanics/form', {
                    mechanic: mechanic,
                    pageTitle: 'Edit mechanic',
                    formMode: 'edit',
                    btnLabel: 'Edit Mechanic',
                    formAction: '/mechanics/edit',
                    navLocation: "mechanics",
                    validationErrors: []
                });
            }
        )
}


exports.showMechanicDetails = (req, res, next) => {
    const mechId = req.params.mechanicId;
    MechanicRepository.getMechanicById(mechId)
        .then(mechanic => {
                res.render('pages/mechanics/form', {
                    mechanic: mechanic,
                    pageTitle: 'Mechanic details',
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: "mechanics",
                    validationErrors: []
                });
            }
        )
}

exports.addMechanic = (req, res, next) => {
    const mechData = {...req.body};
    MechanicRepository.createMechanic(mechData)
        .then(result => {
            res.redirect('/mechanics');
        })
        .catch(err => {

            res.render('pages/mechanics/form', {
                mechanic: mechData,
                pageTitle: "Adding a mechanic",
                formMode: "createNew",
                btnLabel: 'Add mechanic',
                formAction: '/mechanics/add',
                navLocation: "mechanics",
                validationErrors: err.errors
            })
        });
};

exports.updateMechanic = (req, res, next) => {
    const mechId = req.body._id;
    const mechData = {...req.body};
    MechanicRepository.updateMechanic(mechId, mechData)
        .then(result => {
            res.redirect('/mechanics');
        })
        .catch(err => {
            MechanicRepository.getMechanicById(mechId)
                .then(result => {
                        mechData.service=result.service;
                        res.render('pages/mechanics/form', {
                            mechanic: mechData,
                            pageTitle: 'Edit mechanic',
                            formMode: 'edit',
                            btnLabel: 'Edit Mechanic',
                            formAction: '/mechanics/edit',
                            navLocation: "mechanics",
                            validationErrors: err.errors
                        })
                    }
                )
        });
};

exports.deleteMechanic = (req, res, next) => {
    const mechId = req.params.mechanicId;
    MechanicRepository.deleteMechanic(mechId)
        .then(() => {
            res.redirect('/mechanics');
        });

};