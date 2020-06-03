import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'ecoleta_dev'
  },
  useNullAsDefault: true
});

export default connection