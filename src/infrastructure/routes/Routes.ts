import { Router } from 'express';
import TransferController from '../controllers/TransferController';

const routes = Router();

routes.post('/', (req, res) => new TransferController(req, res).create());

export default routes;