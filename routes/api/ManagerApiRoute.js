const express = require('express');
const router = express.Router();
const managerApiController = require('../../api/ManagerAPI');

router.get('/', managerApiController.getManagers);
router.get('/:managerId', managerApiController.getManagerById);
router.post('/', managerApiController.createManager);
router.put('/:managerId', managerApiController.updateManager);
router.delete('/:managerId', managerApiController.deleteManager);

module.exports = router;