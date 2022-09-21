import express from 'express';
// import 'express-async-errors';
import routes from '../infrastructure/routes/Routes';

const app = express();
app.use(express.json());
app.use('/transfer', routes);

export default app;