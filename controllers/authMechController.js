const MechanicRepository = require('../repository/sequelize/MechanicRepository');
const authUtil=require('../util/authUtils');
exports.login = (req, res, next) => {
    const phone = req.body.phone;
    const password = req.body.password;
    MechanicRepository.findByPhone(phone)
        .then(mech => {
            if (!mech) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid phone or password."
                })
            } else if (authUtil.comparePasswords(password,mech.password) === true) {
                req.session.loggedUser = mech;
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
exports.logout= (req, res, next) =>{
    req.session.loggedUser=undefined;
    res.redirect('/');
}