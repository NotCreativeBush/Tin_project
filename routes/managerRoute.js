const express = require('express');
const router = express.Router();

const managerController = require('../controllers/managerController');

router.get('/', managerController.showManagerList);
router.get('/add', managerController.showAddManagerForm);
router.get('/edit/:managerId', managerController.showEditManagerForm)
router.get('/details/:managerId', managerController.showManagerDetails);

router.post('/add', managerController.addManager);
router.post('/edit', managerController.updateManager);
router.get('/delete/:managerId', managerController.deleteManager);


module.exports = router;