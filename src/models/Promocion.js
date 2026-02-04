const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const Promocion = sequelize.define(
  'Promocion',
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
      type: DataTypes.STRING(40),
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(120)
    },
    porcentaje: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    dias_semana: {
      type: DataTypes.STRING(21)
    }
  },
  {
    tableName: 'market_promociones',
    timestamps: false
  }
);

module.exports = Promocion;