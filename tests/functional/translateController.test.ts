import app from '../../src/index';
import { translateValues } from '../../src/services/translate.service';
const request = require('supertest');
type TranslateValuesMethod = typeof translateValues;

// Otteniamo il tipo del metodo
const translateValuesMethod: TranslateValuesMethod = translateValues;
jest.mock('../../src/services/translate.service', () => ({
  translateValues: jest.fn().mockResolvedValue({ /* valore di ritorno desiderato */ }),
}));


describe('Translate Controller', () => {
  test('should translate data and return the translated JSON', async () => {
    const inputJSON = {
      prova: 'valore prova',
      provalist: ['valorelista1', 'valorelista2'],
      provaCompless: {
        campo1: 'valore campo1',
        campo2: 'valore campo2',
      },
    };

    const language = 'en';

    // Mock the translateValues function to return a translated JSON
    const mockedTranslateValues = translateValues as jest.MockedFunction<typeof translateValues>;

    mockedTranslateValues.mockResolvedValue({
      prova: 'test value',
      provalist: ['test list value 1', 'test list value 2'],
      provaCompless: {
        campo1: 'test field value 1',
        campo2: 'test field value 2',
      },
    });

    // Make a request to the API
    const response = await request(app)
      .post('/translate')
      .send({
        language,
        data: inputJSON,
      });

    // Expect the response to have status 200
    expect(response.status).toBe(200);

    // Expect the response body to match the translated JSON
    expect(response.body).toEqual({
      prova: 'test value',
      provalist: ['test list value 1', 'test list value 2'],
      provaCompless: {
        campo1: 'test field value 1',
        campo2: 'test field value 2',
      },
    });

    // Expect the translateValues function to have been called with the correct arguments
    expect(mockedTranslateValues).toHaveBeenCalledWith(inputJSON, language);

    // Restore the original implementation of the translateValues function
    mockedTranslateValues.mockRestore();
  });

  test.only('should return status 500 if there is an error during translation', async () => {
    const language = 'en';

    // Mock the translateValues function to throw an error
    const mockedTranslateValues = translateValues as jest.MockedFunction<typeof translateValues>;


    mockedTranslateValues.mockRejectedValue(new Error('Translation error'));

    // Make a request to the API
    const response = await request(app)
      .post('/translate')
      .send({
        language,
        data: {},
      });

    // Expect the response to have status 500
    expect(response.status).toBe(500);

    // Expect the response body to have an error message
    expect(response.body).toEqual({ error: 'Internal server error.' });

    // Expect the translateValues function to have been called with the correct arguments
    expect(mockedTranslateValues).toHaveBeenCalledWith({}, language);

    // Restore the original implementation of the translateValues function
    mockedTranslateValues.mockRestore();
  });
});
