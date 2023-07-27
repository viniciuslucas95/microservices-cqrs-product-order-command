import express, { json } from 'express';
import swaggerUi from 'swagger-ui-express';

import IRegistry from '../infra/registry/IRegistry';
import ProductOrderRouter from './product-order/ProductOrderRouter';

export default class Api {
  constructor(registry: IRegistry, port = 3000) {
    const server = express();

    server.use(json());

    const swaggerOptions = registry.get('swagger').options;

    server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

    server.use('/product-orders', new ProductOrderRouter(registry).router);

    server.listen(port, () => {
      const logger = registry.get('logger');

      logger.log(`Server started at port ${port}...`);
    });
  }
}
