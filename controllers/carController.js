const CarRepository = require('../repository/sequelize/CarRepository');
exports.showCarList = (req, res, next) => {
    CarRepository.getCars()
        .then(cars => {
            res.render('pages/car/list', {
                cars: cars,
                navLocation: 'cars',
                pageTitle: req.__('car.list.pageTitle')
            });

        });

}

exports.showAddCarForm = (req, res, next) => {
    res.render('pages/car/form', {
        car: {},
        pageTitle: req.__('car.form.add.pageTitle'),
        formMode: 'createNew',
        btnLabel: req.__('car.form.add.btnLabel'),
        formAction: '/car/add',
        navLocation: "cars",
        validationErrors: []
    });
}

exports.showEditCarForm = (req, res, next) => {
    const carId = req.params.carId;
    CarRepository.getCarById(carId)
        .then(car => {
                res.render('pages/car/form', {
                    car: car,
                    pageTitle: req.__('car.form.edit.pageTitle'),
                    formMode: 'edit',
                    btnLabel: req.__('car.form.edit.btnLabel'),
                    formAction: '/car/edit',
                    navLocation: "cars",
                    validationErrors: []
                });
            }
        )
}

exports.showCarDetails = (req, res, next) => {
    const carId = req.params.carId;
    CarRepository.getCarById(carId)
        .then(car => {
                res.render('pages/car/form', {
                    car: car,
                    pageTitle: req.__('car.form.details.pageTitle'),
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: "cars",
                    validationErrors: []
                });
            }
        )
}

exports.addCar = (req, res, next) => {
    const carData = {...req.body};
    CarRepository.createCar(carData)
        .then(result => {
            res.redirect('/car');
        }).catch(
        err => {

            res.render('pages/car/form', {
                car: carData,
                pageTitle: req.__('car.form.add.pageTitle'),
                formMode: 'createNew',
                btnLabel: req.__('car.form.add.btnLabel'),
                formAction: '/car/add',
                navLocation: "cars",
                validationErrors: err.errors
            });
        }
    );
};

exports.updateCar = (req, res, next) => {
    const carId = req.body._id;
    const carData = {...req.body};
    CarRepository.updateCar(carId, carData)
        .then(result => {
            res.redirect('/car');
        })
        .catch(err => {
            CarRepository.getCarById(carId)
                .then(result => {
                    carData.service=result.service;
                    res.render('pages/car/form', {
                        car: carData,
                        pageTitle:  req.__('car.form.edit.pageTitle'),
                        formMode: 'edit',
                        btnLabel: req.__('car.form.edit.btnLabel'),
                        formAction: '/car/edit',
                        navLocation: "cars",
                        validationErrors: err.errors
                    });
                }
                );
        });
};

exports.deleteCar = (req, res, next) => {
    const carId = req.params.carId;
    CarRepository.deleteCar(carId)
        .then(() => {
            res.redirect('/car');
        });
};