import express, { json } from 'express';
import swaggerUi from 'swagger-ui-express';

import IRegistry from '../infra/registry/IRegistry';

export default class Api {
  constructor(registry: IRegistry, port: number) {
    const server = express();

    server.use(json());

    const swaggerOptions = registry.get('swagger').options;

    server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

    server.listen(port, () => {
      const logger = registry.get('logger');

      logger.log(`Server started at port ${port}...`);
    });
  }
}
