import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath, pathToFileURL } from 'url';
import { sequelize } from '../database/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const models = {};

// Importar dinámicamente todos los modelos
const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith('.js') && file !== 'index.js');

for (const file of files) {
  const modelPath = pathToFileURL(path.join(__dirname, file)).href;
  const model = await import(modelPath);
  const modelName = Object.keys(model)[0];
  models[modelName] = model[modelName];
}

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
