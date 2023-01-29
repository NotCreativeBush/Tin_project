const express = require('express');
const router = express.Router();

const partsOrderController = require('../controllers/partsOrderController');
const authUtils=require('../util/authUtils');
const authUtil = require("../util/authUtils");

router.get('/', authUtil.permitAuthenticatedManager,partsOrderController.showPartsOrderList);
router.get('/add',authUtil.permitAuthenticatedManager, partsOrderController.showAddPartsOrderForm);
router.get('/edit/:partsOrderId', authUtil.permitAuthenticatedManager, partsOrderController.showEditPartsOrderForm)
router.get('/details/:partsOrderId', authUtil.permitAuthenticatedManager, partsOrderController.showPartsOrderDetails);


router.get('/mechaniclist', partsOrderController.showPartsOrderListMechanic);

router.get('/editstatustrue/:partsOrderId', partsOrderController.changePartsOrderStatusTrue);
router.get('/editstatusfalse/:partsOrderId', partsOrderController.changePartsOrderStatusFalse);

router.post('/add', authUtil.permitAuthenticatedManager,partsOrderController.addPartsOrder);
router.post('/edit',  authUtil.permitAuthenticatedManager,partsOrderController.updatePartsOrder);
router.get('/delete/:partsOrderId',authUtil.permitAuthenticatedManager,partsOrderController.deletePartsOrder);


module.exports = router;