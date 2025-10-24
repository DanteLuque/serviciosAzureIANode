import express from 'express';

import { 
  showUI,
  analyzeVision
 } from '../controllers/vision.controller.js';

const visionRouter = express.Router();

visionRouter.get('/vision', showUI);
visionRouter.post('/vision/analisis', analyzeVision);

export default visionRouter;