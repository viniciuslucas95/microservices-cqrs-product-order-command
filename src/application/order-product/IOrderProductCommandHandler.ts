import ICommandQueryHandler from '../shared/ICommandQueryHandler';
import OrderProductCommand from './OrderProductCommand';
import OrderProductDto from './OrderProductDto';

export default interface IOrderProductCommandHandler
  extends ICommandQueryHandler<OrderProductCommand, OrderProductDto> {}
