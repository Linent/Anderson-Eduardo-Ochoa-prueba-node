const { Sequelize } = require('sequelize');
const config = require('./config');


const dialectOptions = config.DB_HOST.includes('render.com') 
  ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  : {};

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: 'postgres',  
    port: config.DB_PORT,
    logging: false,
    dialectOptions: dialectOptions,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
);

const db = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log('✅ Conectado a la base de datos PostgreSQL');
    } catch (error) {
      console.error('Error al conectar la base de datos:', error);
      throw error;
    }
  },
  sequelize
};

module.exports = db;