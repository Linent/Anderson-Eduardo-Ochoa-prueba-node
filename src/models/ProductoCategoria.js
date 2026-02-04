const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const ProductoCategoria = sequelize.define(
  'ProductoCategoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'market_productos_categorias',
    timestamps: false
  }
);

module.exports = ProductoCategoria;