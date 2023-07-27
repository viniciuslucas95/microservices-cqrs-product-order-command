import IRegistry from '../../infra/registry/IRegistry';

export default abstract class ControllerBase {
  constructor(protected readonly registry: IRegistry) {}
}
