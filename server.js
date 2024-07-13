// server.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post('/add-product', async (req, res) => {
  const { name, code, category } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        code,
        category,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/sites', async (req, res) => {
    const { name, address, phoneNumber, type } = req.body;
    try {
        const newSite = await prisma.site.create({
            data: {
                name,
                address,
                phoneNumber,
                type
            }
        });
        res.status(201).json(newSite);
    } catch (error) {
        console.error("Failed to add site:", error);
        res.status(500).send("Unable to add site");
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});