import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'ecoleta_dev'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database','migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database','seeds')
  },
  useNullAsDefault: true
};