import Logger from '../logger/Logger';
import IRegistry, { Registries } from './IRegistry';
import Swagger from '../swagger/Swagger';

export default class Registry implements IRegistry {
  private readonly _singletons: Registries;

  constructor(apiPort: number) {
    this._singletons = {
      logger: new Logger(),
      swagger: new Swagger(apiPort),
    };
  }

  get<K extends keyof typeof this._singletons>(registry: K) {
    return this._singletons[registry] as (typeof this._singletons)[K];
  }
}
