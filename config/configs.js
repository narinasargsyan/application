module.exports = {
    dbConfigs : {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        name: process.env.DB_NAME || 'postgres',
        dialect: 'postgres',
        logging: true,
      }
}
