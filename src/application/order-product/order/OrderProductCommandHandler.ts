import IOrderProductCommandHandler from './IOrderProductCommandHandler';
import OrderProductCommand from './OrderProductCommand';
import OrderProductDto from './OrderProductDto';
import CommandQueryHandlerBase from '../../shared/CommandQueryHandlerBase';
import ProductOrderEntity from '../../../domain/entities/ProductOrderEntity';
import ProductOrderedEvent from './ProductOrderedEvent';

export default class OrderProductCommandHandler
  extends CommandQueryHandlerBase
  implements IOrderProductCommandHandler
{
  async handle(data: OrderProductCommand): Promise<OrderProductDto> {
    const entity = ProductOrderEntity.create(
      data.productId,
      data.userId,
      data.date,
    );

    const repository = this.registry.get('productOrderRepository');
    await repository.createOrUpdate(entity);

    const event = new ProductOrderedEvent(
      entity.id,
      entity.productId,
      entity.userId,
      entity.date,
    );
    const exchange = this.registry.get('productOrderedExchangePublisher');
    await exchange.publish(event);

    return new OrderProductDto(entity.id);
  }
}
