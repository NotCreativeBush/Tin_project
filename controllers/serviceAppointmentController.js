const ServiceAppointmentRepository = require("../repository/sequelize/ServiceAppointmentRepository");
const CarRepository = require('../repository/sequelize/CarRepository');
const MechanicRepository = require('../repository/sequelize/MechanicRepository');
exports.showServiceAppointmentList = (req, res, next) => {
    ServiceAppointmentRepository.getServiceAppointments()
        .then(appts => {
            res.render('pages/ServiceAppointment/list', {
                serviceAppointment: appts,
                navLocation: 'serviceappointment',
                pageTitle: req.__('serviceappointment.list.pageTitle')
            });
        });


}


exports.showAddServiceAppointmentForm = (req, res, next) => {
    let allCars, allMechanics;
    CarRepository.getCars()
        .then(cars => {
            allCars = cars;
            return MechanicRepository.getMechanics();
        })
        .then(mechs => {
            allMechanics = mechs;
            res.render('pages/ServiceAppointment/form', {
                serviceAppointment: {},

                pageTitle: req.__('serviceappointment.form.add.pageTitle'),
                formMode: 'createNew',
                allMechanics: allMechanics,
                allCars: allCars,
                btnLabel: req.__('serviceappointment.form.add.btnLabel'),

                formAction: '/serviceappointment/add',
                navLocation: 'serviceappointment',
                validationErrors: []
            });
        });
}


exports.showEditServiceAppointmentForm = (req, res, next) => {
    const apptId = req.params.serviceAppointmentId;
    let allCars, allMechanics;

    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics = mechs;
            return CarRepository.getCars();
        })
        .then(cars => {
            allCars = cars;
            return ServiceAppointmentRepository.getServiceAppointmentById(apptId);
        })
        .then(serviceappointment => {

                res.render('pages/ServiceAppointment/form', {
                    serviceAppointment: serviceappointment,
                    pageTitle: req.__('serviceappointment.form.edit.pageTitle'),
                    formMode: 'edit',
                    btnLabel: req.__('serviceappointment.form.edit.btnLabel'),
                    allMechanics: allMechanics,
                    allCars: allCars,
                    formAction: '/serviceappointment/edit',
                    navLocation: 'serviceappointment',
                    validationErrors: []
                });
            }
        );
}


exports.showServiceAppointmentDetails = (req, res, next) => {
    const apptId = req.params.serviceAppointmentId;
    MechanicRepository.getMechanics()
        .then(mechs => {
            allMechanics = mechs;
            return CarRepository.getCars();
        })
        .then(cars => {
            allCars = cars;
            return ServiceAppointmentRepository.getServiceAppointmentById(apptId);
        })
        .then(serviceappointment => {
                res.render('pages/ServiceAppointment/form', {
                    serviceAppointment: serviceappointment,
                    pageTitle: req.__('serviceappointment.form.details.pageTitle'),
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: 'serviceappointment',
                    validationErrors: []
                });
            }
        );
}


exports.addServiceAppointment = (req, res, next) => {
    let allCars, allMechanics;
    const apptData = {...req.body};
    CarRepository.getCars()
        .then(cars => {
            allCars = cars;
            return MechanicRepository.getMechanics();
        })
        .then(mechs => {
            allMechanics=mechs
            ServiceAppointmentRepository.createServiceAppointment(apptData)
                .then(result => {
                    res.redirect('/serviceappointment');
                })
                .catch(err => {
                    res.render('pages/ServiceAppointment/form', {
                        serviceAppointment: apptData,

                        pageTitle: req.__('serviceappointment.form.add.pageTitle'),
                        formMode: 'createNew',

                        allCars: allCars,
                        btnLabel: req.__('serviceappointment.form.add.btnLabel'),
                        allMechanics: allMechanics,
                        formAction: '/serviceappointment/add',
                        navLocation: 'serviceappointment',
                        validationErrors: err.errors
                    })
                    ;
                })
        });
}
exports.updateServiceAppointment = (req, res, next) => {
    let allCars, allMechanics;
    const apptId = req.body._id;
    const apptData = {...req.body};
    CarRepository.getCars()
        .then( cars=> {
            allCars=cars
            return MechanicRepository.getMechanics()
        })
        .then(mechs => {
            allMechanics=mechs
            ServiceAppointmentRepository.updateServiceAppointment(apptId, apptData)
                .then(result => {
                    res.redirect('/serviceappointment');
                }).catch(err => {
                res.render('pages/ServiceAppointment/form', {
                    serviceAppointment: apptData,

                    pageTitle: req.__('serviceappointment.form.edit.pageTitle'),
                    formMode: 'edit',
                    allMechanics: allMechanics,
                    allCars: allCars,
                    btnLabel: req.__('serviceappointment.form.edit.btnLabel'),

                    formAction: '/serviceappointment/edit',
                    navLocation: 'serviceappointment',
                    validationErrors: err.errors
                })
                ;
            })
        });
}

exports.deleteServiceAppointment = (req, res, next) => {
    const apptId = req.params.serviceAppointmentId;
    ServiceAppointmentRepository.deleteServiceAppointment(apptId)
        .then(() => {
            res.redirect('/serviceappointment');
        });
};