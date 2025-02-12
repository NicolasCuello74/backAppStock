import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Subcategory } from './subCategory.js';
export const Product = sequelize.define(
  'Product',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      references: { model: Subcategory, key: 'id' },
    },
  },
  {
    timestamps: true,
  },
);

Subcategory.hasMany(Product, { foreignKey: 'subcategoryId' });
Product.belongsTo(Subcategory, { foreignKey: 'subcategoryId' });
