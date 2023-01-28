const MechanicRepository = require('../repository/sequelize/MechanicRepository');
const ManagerRepository = require('../repository/sequelize/ManagerRepository')
const authUtil = require('../util/authUtils');
exports.login = (req, res, next) => {
    const phone = req.body.phone;
    const password = req.body.password;
    MechanicRepository.findByPhone(phone)
        .then(mech => {
            if (!mech) {
                ManagerRepository.findByPhone(phone)
                    .then(manag => {
                        if (!manag) {
                            res.render('index', {
                                navLocation: '',
                                loginError: "Invalid phone or password."
                            })
                        } else if (authUtil.comparePasswords(password, manag.password) === true) {
                            manag.typeOfUser='Manager';
                            req.session.loggedUser = manag;
                            req.session.loggedUserType = "Manager";

                            res.redirect('/');
                        } else {
                            res.render('index', {
                                navLocation: '',
                                loginError: "Invalid phone or password."
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });


            } else if (authUtil.comparePasswords(password, mech.password) === true) {
                mech.typeOfUser='Mechanic';
                req.session.loggedUser = mech;
                req.session.loggedUserType = "Mechanic";

                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid phone or password."
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}
exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}