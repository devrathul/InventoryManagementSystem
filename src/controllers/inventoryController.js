let productsList = []
let currentProductID = 1;

exports.addInventory = (req, res) => {
    const { name, category, price, quantity, status } = req.body
    const data = { id: currentProductID++, name, category, price, quantity, status }
    productsList.push(data)
    return res.status(201).send("Product Added Successfully...")
}

exports.getInventory = (req, res) => {
    if (productsList.length <= 0) {
        return res.send("Product list is empty...")
    }
    return res.status(200).send(productsList)
}