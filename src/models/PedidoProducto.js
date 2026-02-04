const { DataTypes } = require('sequelize');
const db = require('../config/database');
const sequelize = db.sequelize;

const PedidoProducto = sequelize.define(
  'PedidoProducto',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9, 3),
      allowNull: false
    },
    valor_unitario: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false
    },
    valor_unitario_promocion: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false
    },
    total_teorico: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false
    },
    total_final: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false
    },
    id_promocion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'market_pedidos_productos',
    timestamps: false
  }
);

module.exports = PedidoProducto;