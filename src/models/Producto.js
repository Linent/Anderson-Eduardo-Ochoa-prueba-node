const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const Producto = sequelize.define(
  'Producto',
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
    kit: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    barcode: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    presentacion: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500)
    },
    foto: {
      type: DataTypes.STRING(120)
    },
    peso: {
      type: DataTypes.DECIMAL(6, 2)
    }
  },
  {
    tableName: 'market_productos',
    timestamps: false
  }
);

module.exports = Producto;