import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Category = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
