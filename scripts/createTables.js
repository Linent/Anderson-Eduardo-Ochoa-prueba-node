
require('dotenv').config();
const db = require('../src/config/database');
require('../src/models/associations');

const createTables = async () => {
  try {
    console.log('Creando tablas en la base de datos...\n');

    await db.connect();
    await db.sequelize.sync({ force: false });
    console.log('Tablas creadas exitosamente\n');

    await db.sequelize.close();
    console.log('\n Proceso completado');
    process.exit(0);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createTables();