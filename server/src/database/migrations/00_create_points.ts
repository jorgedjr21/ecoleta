import Knex from 'knex';

export async function up(knex: Knex) {
  
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('points', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('image').notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.float('latitude', 22, 8).notNullable();
      table.float('longitude', 22, 8).notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}