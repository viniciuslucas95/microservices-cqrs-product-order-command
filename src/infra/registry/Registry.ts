import { Pool } from 'pg';

import Logger from '../logger/Logger';
import IRegistry, { Registries } from './IRegistry';
import Swagger from '../swagger/Swagger';
import OrderProductCommandHandler from '../../application/order-product/order/OrderProductCommandHandler';
import ProductOrderController from '../../api/product-order/ProductOrderController';
import ProductOrderedExchangePublisher from '../queue/product-order/ProductOrderedExchangePublisher';
import ProductOrderRepository from '../repository/product-order/ProductOrderRepository';

export default class Registry implements IRegistry {
  private readonly _singletons: Registries;

  constructor(
    apiPort = 3001,
    databaseHost = 'localhost',
    databasePort = 5433,
    databaseUsername = 'admin',
    databasePassword = 'admin',
    databaseName = 'dev',
    messageBrokerHost?: string,
    messageBrokerPort?: number,
    messageBrokerUsername?: string,
    messageBrokerPassword?: string,
  ) {
    this._singletons = {
      logger: new Logger(),
      swagger: new Swagger(apiPort),
      orderProductCommandHandler: new OrderProductCommandHandler(this),
      productOrderController: new ProductOrderController(this),
      productOrderedExchangePublisher: new ProductOrderedExchangePublisher(
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
