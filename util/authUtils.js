const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    const passHashed = bcrypt.hashSync(passPlain, salt);
    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain, passHash);
    return res;
}

exports.permitAuthenticatedMechanic = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    const loggedUserType = req.session.loggedUserType;
    if (loggedUser && (loggedUserType === "Mechanic" || loggedUserType === "Manager")) {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}
exports.permitAuthenticatedManager = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    const loggedUserType = req.session.loggedUserType;
    if (loggedUser && loggedUserType === "Manager") {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}