const express = require('express')
const inventory_Con = require('../controllers/inventoryController')
const validationInventory = require('../middleware/validationInventory')

const router = express.Router()

router.post('/', validationInventory, inventory_Con.addInventory)
router.get('/', inventory_Con.getInventory)

module.exports = router