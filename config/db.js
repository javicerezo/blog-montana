import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST || '127.0.0.1';
const port = Number(process.env.DB_PORT || 3306);

console.log(`🔌 DB host=${host} port=${port} name=${process.env.DB_NAME}`);

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    protocol: process.env.DB_HOST,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});


// Test de conexión explícito
(async () => {
  try {
    await db.authenticate();
    console.log('✅ Conexión a DB OK');
  } catch (e) {
    console.error('❌ Error conectando a DB:', e.message);
  }
})();

export default db;