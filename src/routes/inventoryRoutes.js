const express = require('express')
const inventory_Con = require('../controllers/inventoryController')
const validationInventory = require('../middleware/validationInventory')

const router = express.Router()

router.post('/', validationInventory, inventory_Con.addInventory)
router.get('/', inventory_Con.getInventory)
router.get('/:id', inventory_Con.getInventoryById)
router.put('/:id', validationInventory, inventory_Con.updateInventory)
router.delete('/:id', inventory_Con.deleteInventory)

module.exports = router