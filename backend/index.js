const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// In-memory data store
let users = [];
let products = [];
let currentUserId = 1;
let currentProductId = 1;

// Helper functions
const findUserById = (id) => users.find(user => user.id === id);

// Register
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    const user = { id: currentUserId++, username, password, role: role || 'shopper' };
    users.push(user);
    res.json(user);
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Admin: Add user
app.post('/users', (req, res) => {
    const { username, password, role } = req.body;
    const user = { id: currentUserId++, username, password, role };
    users.push(user);
    res.json(user);
});

// Admin: Delete user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id != id);
    res.json({ message: "User deleted successfully" });
});

// Seller: Add product
app.post('/products', (req, res) => {
    const { name, price, quantity, sellerId } = req.body;
    const product = { id: currentProductId++, name, price, quantity, sellerId };
    products.push(product);
    res.json(product);
});

// Shopper: View products
app.get('/products', (req, res) => {
    res.json(products);
});

// Shopper: Purchase product
app.post('/purchase', (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (product.quantity < quantity) {
        return res.status(400).json({ message: "Not enough stock" });
    }

    product.quantity -= quantity;
    res.json({ message: "Purchase successful", product });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
