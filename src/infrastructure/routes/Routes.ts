import { Router } from 'express';
import BookController from '../controllers/BookController';

const routes = Router();

routes.post('/', (req, res) => new BookController(req, res).create());
routes.get('/', (req, res) => new BookController(req, res).list());

export default routes;