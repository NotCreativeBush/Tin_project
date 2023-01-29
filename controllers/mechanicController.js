const MechanicRepository = require('../repository/sequelize/MechanicRepository');
const CarRepository = require("../repository/sequelize/CarRepository");
exports.showMechanicList = (req, res, next) => {
    MechanicRepository.getMechanics()
        .then(mechs => {
            res.render('pages/mechanics/list', {
                mechanics: mechs,
                navLocation: "mechanics",
                pageTitle: req.__('mechanic.list.pageTitle')
            });
        })


}


exports.showAddMechanicForm = (req, res, next) => {
    res.render('pages/mechanics/form', {
        mechanic: {},
        pageTitle: req.__('mechanic.form.add.pageTitle'),
        formMode: 'createNew',
        btnLabel: req.__('mechanic.form.add.btnLabel'),
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
                    pageTitle: req.__('mechanic.form.edit.pageTitle'),
                    formMode: 'edit',
                    btnLabel: req.__('mechanic.form.edit.btnLabel'),
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
                    pageTitle: req.__('mechanic.form.details.pageTitle'),
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
                pageTitle: req.__('mechanic.form.add.pageTitle'),
                formMode: "createNew",
                btnLabel: req.__('mechanic.form.add.btnLabel'),
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
                            pageTitle: req.__('mechanic.form.edit.pageTitle'),
                            formMode: 'edit',
                            btnLabel: 'Edit Mechanic',
                            formAction: req.__('mechanic.form.edit.btnLabel'),
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