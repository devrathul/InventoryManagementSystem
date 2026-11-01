let productsList = []
let currentProductID = 1;

// Add Item
exports.addInventory = (req, res) => {
    const { name, category, price, quantity, status } = req.body
    const data = { id: currentProductID++, name, category, price, quantity, status }
    productsList.push(data)
    return res.status(201).send("Product Added Successfully...")
}

// Fetch All
exports.getInventory = (req, res) => {

    const { search } = req.query

    if (productsList.length <= 0) {
        return res.send("Product list is empty...")
    }
    if (search) {
        const filterProductList = productsList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        return res.status(200).json(filterProductList)
    }
    return res.status(200).json(productsList)
}

// Fetch Single
exports.getInventoryById = (req, res) => {
    const productID = parseInt(req.params.id)
    const product = productsList.find(product => product.id === productID)
    if (!product) {
        return res.status(404).send("Product Not Found...")
    }
    return res.status(200).send(product)
}

// Update

exports.updateInventory = (req, res) => {
    const productID = parseInt(req.params.id)
    const { name, category, price, quantity, status } = req.body
    const productIndex = productsList.findIndex(product => product.id === productID)

    if (productIndex === -1) {
        return res.status(404).send("Product Not Found...")
    }

    productsList[productIndex] = { id: productID, name, category, price, quantity, status }

    return res.status(200).send(productsList)
}

// Delete

exports.deleteInventory = (req, res) => {
    const productID = parseInt(req.params.id)
    const productIndex = productsList.findIndex(product => product.id === productID)

    if (productIndex === -1) {
        return res.status(404).send("Product Not Found...")
    }

    productsList.splice(productIndex, 1)

    return res.status(200).send("Product Deleted")
}