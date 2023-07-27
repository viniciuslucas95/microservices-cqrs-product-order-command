import { Pool } from 'pg';

import Logger from '../logger/Logger';
import IRegistry, { Registries } from './IRegistry';
import Swagger from '../swagger/Swagger';
import OrderProductCommandHandler from '../../application/order-product/OrderProductCommandHandler';
import ProductOrderController from '../../api/product-order/ProductOrderController';
import ProductOrderedExchange from '../queue/product-order/ProductOrderedExchange';
import ProductOrderRepository from '../repository/product-order/ProductOrderRepository';

export default class Registry implements IRegistry {
  private readonly _singletons: Registries;

  constructor(
    apiPort = 3000,
    databaseHost = 'localhost',
    databasePort = 5432,
    databaseUsername = 'admin',
    databasePassword = 'admin',
    databaseName = 'dev',
    messageBrokerHost = 'localhost',
    messageBrokerPort = 5672,
    messageBrokerUsername = 'guest',
    messageBrokerPassword = 'guest',
  ) {
    this._singletons = {
      logger: new Logger(),
      swagger: new Swagger(apiPort),
      orderProductCommandHandler: new OrderProductCommandHandler(this),
      productOrderController: new ProductOrderController(this),
      productOrderedExchangePublish: new ProductOrderedExchange(
        messageBrokerHost,
        messageBrokerPort,
        messageBrokerUsername,
        messageBrokerPassword,
      ),
      productOrderRepository: new ProductOrderRepository(
        new Pool({
          host: databaseHost,
          port: databasePort,
          user: databaseUsername,
          password: databasePassword,
          database: databaseName,
        }),
      ),
    };
  }

  get<K extends keyof typeof this._singletons>(registry: K) {
    return this._singletons[registry] as (typeof this._singletons)[K];
  }
}
