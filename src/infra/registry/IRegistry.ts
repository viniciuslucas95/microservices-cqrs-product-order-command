import ILogger from '../logger/ILogger';
import ISwagger from '../swagger/ISwagger';

export type Registries = {
  logger: ILogger;
  swagger: ISwagger;
};

export default interface IRegistry {
  get<K extends keyof Registries>(registry: K): Registries[K];
}
