const mongoose = require('./db');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
