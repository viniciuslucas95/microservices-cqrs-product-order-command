import RepositoryBase from '../shared/RepositoryBase';
import IProductOrderRepository from '../../../application/order-product/IProductOrderRepository';
import ProductOrderEntity from '../../../domain/entities/ProductOrderEntity';
import ProductOrderModel from './ProductOrderModel';

export default class ProductOrderRepository
  extends RepositoryBase
  implements IProductOrderRepository
{
  public override readonly name = 'product_orders';

  async createOrUpdate(entity: ProductOrderEntity) {
    const existingModel = await this.getById(entity.id);

    if (existingModel) {
      await this.query(`UPDATE "${this.name}" SET status = $2 WHERE id = $1`, [
        existingModel.id,
        entity.status,
      ]);
      return;
    }

    await this.query(
      `INSERT INTO "${this.name}"(id, product_id, user_id, date, status) VALUES($1, $2, $3, $4, $5)`,
      [entity.id, entity.productId, entity.userId, entity.date, entity.status],
    );
  }

  public async getById(id: string) {
    const results = await this.query<ProductOrderModel>(
      `SELECT * FROM "${this.name}" WHERE id = $1`,
      [id],
    );

    const item = results[0];

    return item
      ? new ProductOrderEntity(
          item.product_id,
          item.user_id,
          item.date,
          item.status,
          item.id,
        )
      : undefined;
  }
}
