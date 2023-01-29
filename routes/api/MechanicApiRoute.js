const express = require('express');
const router = express.Router();
const mechanicApiController = require('../../api/MechanicAPI');
const authUtils = require("../../util/authUtils");

router.get('/', mechanicApiController.getMechanics);
router.get('/:mechanicId', authUtils.permitAuthenticatedManager,mechanicApiController.getMechanicById);
router.post('/',authUtils.permitAuthenticatedManager, mechanicApiController.createMechanic);
router.put('/:mechanicId', authUtils.permitAuthenticatedManager,mechanicApiController.updateMechanic);
router.delete('/:mechanicId', authUtils.permitAuthenticatedManager,mechanicApiController.deleteMechanic);

module.exports = router;