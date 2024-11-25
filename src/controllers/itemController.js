const Item = require('../models/itemModel');

exports.getAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
};

exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  const newItem = await Item.create({ name, description });
  res.status(201).json(newItem);
};

exports.updateItem = async (req, res) => {
  const { name, description } = req.body;
  const item = await Item.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  item.name = name;
  item.description = description;
  await item.save();
  res.json(item);
};
