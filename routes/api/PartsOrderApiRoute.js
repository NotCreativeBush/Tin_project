const express = require('express');
const router = express.Router();
const partsOrderApiController = require('../../api/PartsOrderAPI');

router.get('/', partsOrderApiController.getPartsOrders);
router.get('/:partsOrderId', partsOrderApiController.getPartsOrderById);
router.post('/', partsOrderApiController.createPartsOrder);
router.put('/:partsOrderId', partsOrderApiController.updatePartsOrder);
router.delete('/:partsOrderId', partsOrderApiController.deletePartsOrder);


module.exports = router;