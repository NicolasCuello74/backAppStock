import { Product } from '../models/product.js';
import { User } from '../models/user.js';
import { Category } from '../models/Category.js';
import { Subcategory } from '../models/subCategory.js';

export const getProd = async (req, res) => {
  try {
    const arrayProduct = await Product.findAll();
    res.status(201).json(arrayProduct);
  } catch (error) {
    res.status(424).json({ messagge: error.messagge });
  }
};

export const getUser = async (req, res) => {
  try {
    const arrayClients = await User.findAll();
    res.status(201).json(arrayClients);
  } catch (error) {
    res.status(424).json({ messagge: error.messagge });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Subcategory }],
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postProd = async (req, res) => {
  try {
    const phones = await Subcategory.findOne({
      where: { name: 'Teléfonos móviles' },
    });
    const newProdu = await Product.create({
      name: 'iPhone 13',
      subcategoryId: phones.id,
    });
    console.log('Product added successfully');
    res.status(201).json(newProdu);
  } catch (error) {
    res.status(424).json({ messagge: error.messagge });
  }
};

export const postCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const postSubCategories = async (req, res) => {
  const { name, categoryId } = req.body;
  try {
    const subcategory = await Subcategory.create({ name, categoryId });
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(424).json({ messagge: error.messagge });
  }
};
