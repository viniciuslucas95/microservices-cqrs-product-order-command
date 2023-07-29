export default abstract class ExceptionBase extends Error {
  constructor(
    public readonly name: string,
    public readonly message: string,
    public readonly statusCode: number,
  ) {
    super(message);
  }
}
