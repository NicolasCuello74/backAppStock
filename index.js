import express from 'express';
import morgan from 'morgan';
import models from './models/index.js';
import router from './routes/index.js';
const app = express();
const port = process.env.PORT || 3001;

async function main() {
  try {
    await models.sequelize.sync({ force: false });
    console.log('Database connected successfully');
    app.use(morgan('tiny'));
    app.use(express.json());
    app.use(router);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log('Unable to connect to the database');
  }
}

main();
