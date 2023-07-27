import { Request, Response } from 'express';

export default interface IProductOrderController {
  order(req: Request, res: Response): Promise<void>;
}
