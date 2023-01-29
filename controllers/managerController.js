const ManagerRepository = require('../repository/sequelize/ManagerRepository');
const CarRepository = require("../repository/sequelize/CarRepository");
exports.showManagerList = (req, res, next) => {
    ManagerRepository.getManagers()
        .then(manags => {
            res.render('pages/managers/list', {
                managers: manags,
                navLocation: "managers",
                pageTitle: req.__('manager.list.pageTitle')
            });
        })


}


exports.showAddManagerForm = (req, res, next) => {
    res.render('pages/managers/form', {
        manager: {},
        pageTitle: req.__('manager.form.add.pageTitle'),
        formMode: 'createNew',
        btnLabel: req.__('manager.form.add.btnLabel'),
        formAction: '/managers/add',
        navLocation: "managers",
        validationErrors: []
    });
}


exports.showEditManagerForm = (req, res, next) => {
    const managId = req.params.managerId;
    ManagerRepository.getManagerById(managId)
        .then(manager => {
                res.render('pages/managers/form', {
                    manager: manager,
                    pageTitle: req.__('manager.form.edit.pageTitle'),
                    formMode: 'edit',
                    btnLabel: req.__('manager.form.edit.btnLabel'),
                    formAction: '/managers/edit',
                    navLocation: "managers",
                    validationErrors: []
                });
            }
        )
}


exports.showManagerDetails = (req, res, next) => {
    const managId = req.params.managerId;
    ManagerRepository.getManagerById(managId)
        .then(manager => {
                res.render('pages/managers/form', {
                    manager: manager,
                    pageTitle: req.__('manager.form.details.pageTitle'),
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: "managers",
                    validationErrors: []
                });
            }
        )
}

exports.addManager = (req, res, next) => {
    const managData = {...req.body};
    ManagerRepository.createManager(managData)
        .then(result => {
            res.redirect('/managers');
        })
        .catch(err => {

            res.render('pages/managers/form', {
                manager: managData,
                pageTitle: req.__('manager.form.add.pageTitle'),
                formMode: "createNew",
                btnLabel: req.__('manager.form.add.btnLabel'),
                formAction: '/managers/add',
                navLocation: "managers",
                validationErrors: err.errors
            })
        });
};

exports.updateManager = (req, res, next) => {
    const managId = req.body._id;
    const managData = {...req.body};
    ManagerRepository.updateManager(managId, managData)
        .then(result => {
            res.redirect('/managers');
        })
        .catch(err => {
            ManagerRepository.getManagerById(managId)
                .then(result => {

                        res.render('pages/managers/form', {
                            manager: managData,
                            pageTitle: req.__('manager.form.edit.pageTitle'),
                            formMode: 'edit',
                            btnLabel: req.__('manager.form.edit.btnLabel'),
                            formAction: '/managers/edit',
                            navLocation: "managers",
                            validationErrors: err.errors
                        })
                    }
                )
        });
};

exports.deleteManager = (req, res, next) => {
    const managId = req.params.managerId;
    ManagerRepository.deleteManager(managId)
        .then(() => {
            res.redirect('/managers');
        });

};