import { Router } from 'express';

import RouterBase from '../shared/RouterBase';
import IRegistry from '../../infra/registry/IRegistry';

export default class ProductOrderRouter extends RouterBase {
  public get router() {
    return this._router;
  }

  private readonly _router: Router;

  constructor(registry: IRegistry) {
    super(registry);

    this._router = Router();

    const controller = this.registry.get('productOrderController');

    this._router.post('/order', controller.order.bind(controller));
  }
}
