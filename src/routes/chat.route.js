import express from 'express';

import {
  showUI,
} from '../controllers/chat.controller.js';

const chatRouter = express.Router();

chatRouter.get('/chat', showUI);

export default chatRouter;