import ModelBase from '../shared/ModelBase';

export default class ProductOrderModel extends ModelBase {
  product_id!: string;
  user_id!: string;
  date!: Date;
  status!: string;
}
