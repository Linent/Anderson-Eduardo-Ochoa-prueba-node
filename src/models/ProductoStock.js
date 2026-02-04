const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const ProductoStock = sequelize.define(
  'ProductoStock',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(8, 3),
      allowNull: false
    },
    id_tienda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    tableName: 'market_productos_stocks',
    timestamps: false
  }
);

module.exports = ProductoStock;