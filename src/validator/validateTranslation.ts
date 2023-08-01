import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

// Definisci lo schema di validazione per i parametri della richiesta
const translationSchema = Joi.object({
  data: Joi.object().required(),
  language: Joi.string().required(),
});

export const validateTranslation = (req: Request, res: Response, next: NextFunction) =>{
  console.log(req.body)
  const { error } = translationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}
