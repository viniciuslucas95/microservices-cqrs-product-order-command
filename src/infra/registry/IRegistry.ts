import ILogger from '../logger/ILogger';
import ISwagger from '../swagger/ISwagger';
import IOrderProductCommandHandler from '../../application/order-product/order/IOrderProductCommandHandler';
import IProductOrderController from '../../api/product-order/IProductOrderController';
import IProductOrderedExchangePublisher from '../../application/order-product/order/IProductOrderedExchangePublisher';
import IProductOrderRepository from '../../application/order-product/IProductOrderRepository';
import IUpdateProductOrderStatusCommandHandler from '../../application/order-product/update-status/IUpdateProductOrderStatusCommandHandler';

export type Registries = {
  logger: ILogger;
  swagger: ISwagger;
  orderProductCommandHandler: IOrderProductCommandHandler;
  productOrderController: IProductOrderController;
  productOrderedExchangePublisher: IProductOrderedExchangePublisher;
  productOrderRepository: IProductOrderRepository;
  updateProductOrderPaymentCommandHandler: IUpdateProductOrderStatusCommandHandler;
};

export default interface IRegistry {
  get<K extends keyof Registries>(registry: K): Registries[K];
}
