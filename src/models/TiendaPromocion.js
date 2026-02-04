const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const TiendaPromocion = sequelize.define(
  'TiendaPromocion',
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
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_tienda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_promocion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'market_tiendas_promociones',
    timestamps: false
  }
);

module.exports = TiendaPromocion;