import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Product } from './product.js';

export const ProductDetail = sequelize.define(
  'ProductDetail',
  {
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

ProductDetail.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product',
});
