const express = require('express');
const router = express.Router();
const Item = require('./models/item');

// GET /
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
});

// POST /create
router.post('/create', async (req, res) => {
  const { name } = req.body;
  const item = new Item({ name });
  await item.save();
  res.redirect('/');
});

// GET /edit/:id
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  res.render('edit', { item });
});

// POST /update/:id
router.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await Item.findByIdAndUpdate(id, { name });
  res.redirect('/');
});

// GET /delete/:id
router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.redirect('/');
});

module.exports = router;
