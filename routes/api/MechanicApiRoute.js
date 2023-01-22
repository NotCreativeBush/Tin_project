const express = require('express');
const router = express.Router();
const mechanicApiController = require('../../api/MechanicAPI');

router.get('/', mechanicApiController.getMechanics);
router.get('/:mechanicId', mechanicApiController.getMechanicById);
router.post('/', mechanicApiController.createMechanic);
router.put('/:mechanicId', mechanicApiController.updateMechanic);
router.delete('/:mechanicId', mechanicApiController.deleteMechanic);

module.exports = router;