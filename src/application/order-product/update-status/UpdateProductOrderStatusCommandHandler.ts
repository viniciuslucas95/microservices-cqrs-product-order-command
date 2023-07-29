import CommandQueryHandlerBase from '../../shared/CommandQueryHandlerBase';
import IUpdateProductOrderStatusCommandHandler from './IUpdateProductOrderStatusCommandHandler';
import UpdateProductOrderStatusCommand from './UpdateProductOrderStatusCommand';
import NotFoundException from '../../../domain/exceptions/NotFoundException';

export default class UpdateProductOrderStatusCommandHandler
  extends CommandQueryHandlerBase
  implements IUpdateProductOrderStatusCommandHandler
{
  async handle(data: UpdateProductOrderStatusCommand): Promise<void> {
    const repository = this.registry.get('productOrderRepository');
    const entity = await repository.findById(data.orderId);

    if (!entity) throw new NotFoundException('Product order');

    entity.setStatus(data.status);

    await repository.createOrUpdate(entity);
  }
}
