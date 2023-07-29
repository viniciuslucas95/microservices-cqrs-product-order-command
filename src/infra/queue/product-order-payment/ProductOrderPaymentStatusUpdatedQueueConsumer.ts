import QueueConsumerBase from '../shared/QueueConsumerBase';
import ProductOrderPaymentStatusUpdatedEvent from '../../../application/order-product/update-status/ProductOrderPaymentStatusUpdatedEvent';
import IRegistry from '../../registry/IRegistry';
import CommandQueryBase from '../../../application/shared/CommandQueryBase';
import UpdateProductOrderStatusCommand from '../../../application/order-product/update-status/UpdateProductOrderStatusCommand';

export default class ProductOrderPaymentStatusUpdatedQueueConsumer extends QueueConsumerBase<ProductOrderPaymentStatusUpdatedEvent> {
  constructor(
    private readonly registry: IRegistry,
    host?: string,
    port?: number,
    username?: string,
    password?: string,
  ) {
    super(
      'ProductOrderPayment',
      'StatusUpdate',
      'fanout',
      host,
      port,
      username,
      password,
    );
  }

  async startConsuming() {
    const commandHandler = this.registry.get(
      'updateProductOrderPaymentCommandHandler',
    );

    await this.startConsumingFromQueue(async (data) => {
      const command = CommandQueryBase.create(
        UpdateProductOrderStatusCommand,
        data,
      );

      await commandHandler.handle(command);
    });

    const logger = this.registry.get('logger');

    logger.log(
      `Started consuming from ${this.name}/${this.queueName} queue...`,
    );
  }
}
