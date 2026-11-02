# Inventory Management System

A simple REST API for managing inventory products, built with Node.js and Express. Product data is currently stored in memory, so it is cleared whenever the server restarts.

## Features

- Create, list, retrieve, update, and delete products
- Filter the product list by name and category
- Case-insensitive partial matching for name and category filters
- Validate required product fields

## Requirements

- Node.js
- npm

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the server directly with Node:

```bash
node src/server.js
```

The API will be available at `http://localhost:3000`. The `npm start` and `npm run dev` scripts use `nodemon`, which is not currently listed as a project dependency. To use those scripts, install it as a development dependency first:

```bash
npm install --save-dev nodemon
npm start
```

## Product Format

Create and update requests expect a JSON body with these fields:

```json
{
  "name": "Wireless Mouse",
  "category": "Accessories",
  "price": 29.99,
  "quantity": 12,
  "status": "In Stock"
}
```

The current middleware requires `name`, `category`, `price`, `quantity`, and `status`. Quantity must not be negative.

## API

All endpoints use the `/product` base path.

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/product` | Add a product |
| `GET` | `/product` | List products; optionally filter by name or category |
| `GET` | `/product/:id` | Get one product by ID |
| `PUT` | `/product/:id` | Replace a product's fields |
| `DELETE` | `/product/:id` | Delete a product |

### Add a Product

```http
POST /product
Content-Type: application/json
```

Send a product JSON body as shown above. A successful request returns `201 Created`.

### List and Filter Products

The `search` parameter matches product names, and `category` matches product categories. Both matches are case-insensitive and allow partial text. You can use either filter or combine them:

```http
GET /product
GET /product?search=mouse
GET /product?category=access
GET /product?search=mouse&category=access
```

Quantity filtering is not implemented yet.

### Get, Update, or Delete a Product

Replace `:id` with the product ID:

```http
GET /product/1
PUT /product/1
DELETE /product/1
```

For `PUT`, send the full product JSON body. A product that does not exist returns `404 Not Found` for get, update, and delete requests.

## Current Limitations

- Products are kept in a JavaScript array and are not persisted to a database or file.
- The `npm test` script is a placeholder; no automated tests are configured yet.
- When the inventory is empty, the list endpoint currently returns a text message. If filters find no matches, it returns an empty JSON array.