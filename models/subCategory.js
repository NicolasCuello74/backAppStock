import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Category } from './Category.js';
export const Subcategory = sequelize.define(
  'Subcategory',
  {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    categoryId: {
      type: DataTypes.INTEGER,
      references: { model: Category, key: 'id' },
    },
  },
  { timestamps: true },
);
Category.hasMany(Subcategory, { foreignKey: 'categoryId' });
Subcategory.belongsTo(Category, { foreignKey: 'categoryId' });
