import express from 'express';

import { 
  showUI
 } from '../controllers/vision.controller.js';

const visionRouter = express.Router();

visionRouter.get('/vision', showUI);

export default visionRouter;