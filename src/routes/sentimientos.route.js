import express from 'express';

import { 
  showUI
 } from '../controllers/sentimientos.controller.js';

const sentimientosRouter = express.Router();

sentimientosRouter.get('/sentimientos', showUI);

export default sentimientosRouter;