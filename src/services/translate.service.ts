import { translate } from '@vitalets/google-translate-api';

interface TranslatableJSON {
  [key: string]: string | string[] | TranslatableJSON;
}

export const translateValues = async (obj: TranslatableJSON, language: string): Promise<TranslatableJSON> => {
  const textsToTranslate: string[] = [];

  const collectTextsToTranslate = (value: any) => {
    if (typeof value === 'string') {
      textsToTranslate.push(value);
    } else if (Array.isArray(value)) {
      value.forEach(collectTextsToTranslate);
    } else if (typeof value === 'object' && value !== null) {
      for (const prop in value) {
        collectTextsToTranslate(value[prop]);
      }
    }
  };

  collectTextsToTranslate(obj);

  const translations: any = await translate(textsToTranslate.join(), { to: language });
  translations.text = translations.text.split(',');

  const assignTranslations = (value: any, index: number): any => {
    if (typeof value === 'string') {
      const translation = translations.text[index];
      return translation ? translation : value;
    } else if (Array.isArray(value)) {
      return value.map((item) => assignTranslations(item, index++));
    } else if (typeof value === 'object' && value !== null) {
      const translatedObj: any = {};
      for (const prop in value) {
        translatedObj[prop] = assignTranslations(value[prop], index++);
      }
      return translatedObj;
    } else {
      return value;
    }
  };

  return assignTranslations(obj, 0);
};
