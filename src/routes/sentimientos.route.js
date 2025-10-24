import express from 'express';

import { 
  showUI,
  analyzeSentiment
 } from '../controllers/sentimientos.controller.js';

const sentimientosRouter = express.Router();

sentimientosRouter.get('/sentimientos', showUI);
sentimientosRouter.post('/sentimientos/analisis', analyzeSentiment);

export default sentimientosRouter;