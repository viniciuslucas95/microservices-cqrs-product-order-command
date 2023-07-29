import ICommandQueryHandler from '../../shared/ICommandQueryHandler';
import UpdateProductOrderStatusCommand from './UpdateProductOrderStatusCommand';

export default interface IUpdateProductOrderStatusCommandHandler
  extends ICommandQueryHandler<UpdateProductOrderStatusCommand> {}
