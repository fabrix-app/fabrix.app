/**
 * Define the database stores. A store is typically a single database.
 *
 * Set production connection info in config/env/production/database.ts
 */
export const stores = {
  sqlitedev: {
    orm: 'sequelize',
    database: 'dev',
    storage: './dist/dev.sqlite',
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
}
