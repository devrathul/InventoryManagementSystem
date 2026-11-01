const express = require('express');
const inventory_Router = require('./routes/inventoryRoutes')
const app = express();

app.use(express.json())
app.use('/product', inventory_Router)

app.listen(3000, () => {
    console.log(`Server running sucessfully... http://localhost:3000`)
})