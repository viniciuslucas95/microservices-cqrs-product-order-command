import { NextFunction, Request, Response } from 'express';

import IRegistry from '../../infra/registry/IRegistry';
import ExceptionBase from '../../domain/exceptions/ExceptionBase';
import statusCode from '../../domain/enums/StatusCode';

export default class ExceptionMiddleware {
  constructor(private readonly registry: IRegistry) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(err: Error, req: Request, res: Response, _: NextFunction) {
    const error = {
      name: err.name,
      message: err.message,
    };

    if (err instanceof ExceptionBase) res.status(err.statusCode).send(error);
    else res.status(statusCode.internalServerError).send(error);

    const logger = this.registry.get('logger');

    logger.error(`${req.path} - ${err.name}: ${err.message}`);
  }
}
