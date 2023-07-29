export default class ProductOrderPaymentStatusUpdatedEvent {
  constructor(
    readonly orderId: string,
    readonly status: string,
  ) {}
}
