import { Request, Response } from 'express';

import ControllerBase from '../shared/ControllerBase';
import OrderProductCommand from '../../application/order-product/order/OrderProductCommand';
import IProductOrderController from './IProductOrderController';
import CommandQueryBase from '../../application/shared/CommandQueryBase';

export default class ProductOrderController
  extends ControllerBase
  implements IProductOrderController
{
  async order(req: Request, res: Response) {
    const service = this.registry.get('orderProductCommandHandler');
    const data = CommandQueryBase.create(OrderProductCommand, req.body);
    const dto = await service.handle(data);

    res.status(201).send(dto);
  }
}
