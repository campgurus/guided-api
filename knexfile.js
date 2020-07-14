// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: "mysql://darius:abc123@localhost:3306/guided_dev",
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
