import ProductOrderEntity from '../../domain/entities/ProductOrderEntity';

export default interface IProductOrderRepository {
  createOrUpdate(entity: ProductOrderEntity): Promise<void>;
  findById(id: string): Promise<ProductOrderEntity | undefined>;
}
