import { createproducts1678050347611 } from './src/shared/typeorm/migrations/1678629465256-CreateProducts';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  migrations: [createproducts1678050347611],
});
