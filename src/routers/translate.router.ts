import express from 'express';
import * as translateController from '../controllers/translate.controller';
import {validateTranslation} from '../validator/validateTranslation'

const router = express.Router();

router.post('/', validateTranslation, translateController.translate);

export { router as default };
