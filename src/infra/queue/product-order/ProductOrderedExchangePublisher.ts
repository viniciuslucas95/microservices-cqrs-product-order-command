import ExchangePublisherBase from '../shared/ExchangePublisherBase';
import ProductOrderedEvent from '../../../application/order-product/order/ProductOrderedEvent';
import IProductOrderedExchangePublisher from '../../../application/order-product/order/IProductOrderedExchangePublisher';

export default class ProductOrderedExchangePublisher
  extends ExchangePublisherBase<ProductOrderedEvent>
  implements IProductOrderedExchangePublisher
{
  constructor(
    host?: string,
    port?: number,
    username?: string,
    password?: string,
  ) {
    super('ProductOrdered', 'fanout', host, port, username, password);
  }
}
