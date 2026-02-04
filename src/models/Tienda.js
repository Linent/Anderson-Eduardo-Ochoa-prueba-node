const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const Tienda = sequelize.define(
  'Tienda',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500)
    },
    telefono: {
      type: DataTypes.STRING(20)
    },
    direccion: {
      type: DataTypes.STRING(120)
    },
    direccion_anexo: {
      type: DataTypes.STRING(40)
    },
    direccion_barrio: {
      type: DataTypes.STRING(25)
    },
    calificacion: {
      type: DataTypes.DECIMAL(3, 2)
    },
    calificacion_cantidad: {
      type: DataTypes.INTEGER
    },
    impuestos: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    dias_trabajados: {
      type: DataTypes.STRING(21)
    }
  },
  {
    tableName: 'market_tiendas',
    timestamps: false
  }
);

module.exports = Tienda;