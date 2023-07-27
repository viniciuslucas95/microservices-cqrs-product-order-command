import Api from './api/Api';
import Registry from './infra/registry/Registry';
import dotenv from 'dotenv';

dotenv.config();

process.env.TZ = 'UTC';

const apiPortEnv = process.env.API_PORT;

if (!apiPortEnv) throw new Error('API_PORT env not set');

const apiPort = parseInt(apiPortEnv);

if (apiPort < 1) throw new Error('API port cannot be lower than 1');

new Api(new Registry(apiPort), apiPort);
