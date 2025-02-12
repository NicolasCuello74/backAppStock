import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Order } from './order.js';
import { Product } from './product.js';

export const OrderItem = sequelize.define(
  'OrderItem',
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
  as: 'order',
});
OrderItem.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product',
});
