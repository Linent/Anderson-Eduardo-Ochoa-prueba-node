const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const Pedido = sequelize.define(
  'Pedido',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    instrucciones: {
      type: DataTypes.STRING(500)
    },
    entrega_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    valor_productos: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false
    },
    valor_envio: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    valor_descuento: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false
    },
    valor_cupon: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false
    },
    impuestos: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    valor_impuestos: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false
    },
    valor_final: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false
    },
    calificacion: {
      type: DataTypes.DECIMAL(3, 2)
    },
    id_tienda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(160)
    },
    valor_comision: {
      type: DataTypes.DECIMAL(11, 3)
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'market_pedidos',
    timestamps: false
  }
);

module.exports = Pedido;