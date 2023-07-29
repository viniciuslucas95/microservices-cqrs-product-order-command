import ExceptionBase from './ExceptionBase';
import StatusCode from '../enums/StatusCode';

export default class NotFoundException extends ExceptionBase {
  constructor(name: string) {
    super('Not Found', `${name} not found`, StatusCode.notFound);
  }
}
