import swaggerJsdoc, { Options } from 'swagger-jsdoc';

import ISwagger from './ISwagger';

export default class Swagger implements ISwagger {
  public get options() {
    return swaggerJsdoc(this._options);
  }

  private readonly _options: Options;

  constructor(apiPort: number) {
    this._options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Product Order Command',
          version: '1.0.0',
          description: 'Product Order Command API documentation',
        },
        servers: [
          {
            url: `http://localhost:${apiPort}/swagger`,
          },
        ],
      },
      apis: ['./swagger.js'],
    };
  }
}
