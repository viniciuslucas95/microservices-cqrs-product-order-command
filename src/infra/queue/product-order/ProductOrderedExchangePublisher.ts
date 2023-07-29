import ExchangePublisherBase from '../shared/ExchangePublisherBase';
import ProductOrderedEvent from '../../../application/order-product/order/ProductOrderedEvent';
import IProductOrderedExchangePublish from '../../../application/order-product/order/IProductOrderedExchangePublish';

export default class ProductOrderedExchangePublisher
  extends ExchangePublisherBase<ProductOrderedEvent>
  implements IProductOrderedExchangePublish
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
