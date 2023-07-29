import ILogger from '../logger/ILogger';
import ISwagger from '../swagger/ISwagger';
import IOrderProductCommandHandler from '../../application/order-product/order/IOrderProductCommandHandler';
import IProductOrderController from '../../api/product-order/IProductOrderController';
import IProductOrderedExchangePublish from '../../application/order-product/order/IProductOrderedExchangePublish';
import IProductOrderRepository from '../../application/order-product/IProductOrderRepository';

export type Registries = {
  logger: ILogger;
  swagger: ISwagger;
  orderProductCommandHandler: IOrderProductCommandHandler;
  productOrderController: IProductOrderController;
  productOrderedExchangePublish: IProductOrderedExchangePublish;
  productOrderRepository: IProductOrderRepository;
};

export default interface IRegistry {
  get<K extends keyof Registries>(registry: K): Registries[K];
}
