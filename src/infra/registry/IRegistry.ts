import ILogger from '../logger/ILogger';
import ISwagger from '../swagger/ISwagger';
import IOrderProductCommandHandler from '../../application/order-product/IOrderProductCommandHandler';
import IProductOrderController from '../../api/product-order/IProductOrderController';
import IProductOrderedExchangePublish from '../../application/order-product/IProductOrderedExchangePublish';
import IProductOrderRepository from '../../application/order-product/IOrderProductRepository';

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
