import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { User } from './user.js';

export const Order = sequelize.define(
  'Order',
  {
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

Order.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});
