const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const Categoria = sequelize.define(
  'Categoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    adultos: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    tableName: 'market_categorias',
    timestamps: false
  }
);

module.exports = Categoria;