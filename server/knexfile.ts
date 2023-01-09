import type { Knex } from "knex";

// Update with your config settings.

const knex_config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: 'localhost',
      port: 5434,
      database: "udp-socket-db",
      user: "postgres",
      password: "123456"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: '0.0.0.0',
      port: 10,
      database: "udp-socket-db",
      user: "root",
      password: "123456"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }

};

export default knex_config;
