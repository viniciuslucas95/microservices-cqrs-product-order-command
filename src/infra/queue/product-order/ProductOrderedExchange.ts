import ExchangeBase from '../shared/ExchangeBase';
import ProductOrderedEvent from '../../../application/order-product/ProductOrderedEvent';
import IProductOrderedExchangePublish from '../../../application/order-product/IProductOrderedExchangePublish';

export default class ProductOrderedExchange
  extends ExchangeBase<ProductOrderedEvent>
  implements IProductOrderedExchangePublish
{
  constructor(host: string, port: number, username: string, password: string) {
    super('ProductOrdered', 'fanout', host, port, username, password);
  }
}
