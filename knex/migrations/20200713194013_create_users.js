
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.binary('id', 16);
    table.string('email').notNullable();
    table.string('username');
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('last_login').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
}