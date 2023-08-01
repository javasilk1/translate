import { Request, Response } from 'express';
import {translateValues} from '../services/translate.service'

export const translate = async (req: Request, res: Response): Promise<void> =>{
  try {
  const { language, data } = req.body;
    // @ts-ignore
    const translatedData = await translateValues(data, language);
    res.json(translatedData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}
