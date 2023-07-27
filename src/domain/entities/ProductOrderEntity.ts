import EntityBase from './EntityBase';

export default class ProductOrderEntity extends EntityBase {
  public get status() {
    return this._status;
  }

  constructor(
    public readonly productId: string,
    public readonly userId: string,
    public readonly date: Date,
    private _status = 'reserved',
    id?: string,
  ) {
    super(id);
  }

  setStatus(status: 'approved' | 'refused') {
    this._status = status;
  }

  static create(productId: string, userId: string, date: Date) {
    return new ProductOrderEntity(productId, userId, date);
  }
}
