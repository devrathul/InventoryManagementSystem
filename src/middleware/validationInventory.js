const validationInventory = (req, res, next) => {
    const { name, category, price, quantity, status } = req.body
    if (!name || !category || !price || !quantity || !status) {
        return res.status(400).send("name, category, price, quantity, status information missing...")
    }
    next()
}

module.exports = validationInventory