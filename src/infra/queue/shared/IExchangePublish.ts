export default interface IExchangePublish<T extends object> {
  name: string;

  publish(event: T, queue?: string): Promise<void>;
}
