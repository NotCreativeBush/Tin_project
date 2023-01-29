const express = require('express');
const router = express.Router();

const mechanicController = require('../controllers/mechanicController');
const authUtils=require('../util/authUtils');

router.get('/', mechanicController.showMechanicList);
router.get('/add', authUtils.permitAuthenticatedManager ,mechanicController.showAddMechanicForm);
router.get('/edit/:mechanicId', authUtils.permitAuthenticatedManager, mechanicController.showEditMechanicForm)
router.get('/details/:mechanicId', authUtils.permitAuthenticatedManager, mechanicController.showMechanicDetails);

router.post('/add', authUtils.permitAuthenticatedManager, mechanicController.addMechanic);
router.post('/edit', authUtils.permitAuthenticatedManager, mechanicController.updateMechanic);
router.get('/delete/:mechanicId', authUtils.permitAuthenticatedManager, mechanicController.deleteMechanic);


module.exports = router;