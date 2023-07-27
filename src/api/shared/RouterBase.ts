import IRegistry from '../../infra/registry/IRegistry';

export default abstract class RouterBase {
  constructor(protected readonly registry: IRegistry) {}
}
