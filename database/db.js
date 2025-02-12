import { Sequelize } from 'sequelize';
import { config } from '../config/config.js';

const dbConfig = config.development;

export const sequelize = new Sequelize(
  `${dbConfig.database}`,
  `${dbConfig.username}`,
  `${dbConfig.password}`,
  {
    host: `${dbConfig.host}`,
    dialect: `${dbConfig.dialect}`,
  },
);
