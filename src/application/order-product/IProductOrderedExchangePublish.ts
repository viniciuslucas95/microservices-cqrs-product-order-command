import IExchangePublish from '../../infra/queue/shared/IExchangePublish';
import ProductOrderedEvent from './ProductOrderedEvent';

export default interface IProductOrderedExchangePublish
  extends IExchangePublish<ProductOrderedEvent> {}
