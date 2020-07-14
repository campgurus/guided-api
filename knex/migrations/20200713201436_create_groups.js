exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', function(table) {
    table.binary('id', 16);
    table.string('name').notNullable();
    table.text('description');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
}