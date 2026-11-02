const validationInventory = (req, res, next) => {
    const { name, category, price, quantity, status } = req.body
    if (!name || name === undefined || !category || category === undefined || !price || price === undefined || quantity < 0 || quantity === undefined || !status || status === undefined) {
        return res.status(400).send("name, category, price, quantity, status information missing...")
    }
    next()
}

module.exports = validationInventory