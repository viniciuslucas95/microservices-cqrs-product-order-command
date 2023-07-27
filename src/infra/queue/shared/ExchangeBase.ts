import amqp, { Channel } from 'amqplib';

import IExchangePublish from './IExchangePublish';

export default abstract class ExchangeBase<T extends object>
  implements IExchangePublish<T>
{
  protected constructor(
    public readonly name: string,
    private readonly type = 'fanout',
    private readonly host: string,
    private readonly port: number,
    private readonly username: string,
    private readonly password: string,
  ) {}

  public async publish(data: T, queue = '') {
    const stringfiedData = JSON.stringify(data);
    const buffer = Buffer.from(stringfiedData, 'utf8');

    await this.withChannel((channel) => {
      channel.publish(this.name, queue, buffer);
    });
  }

  private async withChannel(exec: (channel: Channel) => void) {
    const url = `amqp://${this.username}:${this.password}@${this.host}:${this.port}`;
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();

    await channel.assertExchange(this.name, this.type, {
      durable: true,
    });

    exec(channel);

    await connection.close();
  }
}
