const Tienda = require('./Tienda');
const TiendaPromocion = require('./TiendaPromocion');
const Promocion = require('./Promocion');
const Producto = require('./Producto');
const ProductoCategoria = require('./ProductoCategoria');
const Categoria = require('./Categoria');
const ProductoStock = require('./ProductoStock');
const Pedido = require('./Pedido');
const PedidoProducto = require('./PedidoProducto');

Tienda.hasMany(TiendaPromocion, { foreignKey: 'id_tienda' });
TiendaPromocion.belongsTo(Tienda, { foreignKey: 'id_tienda' });

Promocion.hasMany(TiendaPromocion, { 
    foreignKey: 'id_promocion',
    as: 'tiendas_asociadas' 
});
TiendaPromocion.belongsTo(Promocion, { foreignKey: 'id_promocion' });

Producto.hasMany(ProductoCategoria, { foreignKey: 'id_producto' });
ProductoCategoria.belongsTo(Producto, { foreignKey: 'id_producto' });

Categoria.hasMany(ProductoCategoria, { foreignKey: 'id_categoria' });
ProductoCategoria.belongsTo(Categoria, { foreignKey: 'id_categoria' });

Producto.hasMany(ProductoStock, { foreignKey: 'id_producto' });
ProductoStock.belongsTo(Producto, { foreignKey: 'id_producto' });

Tienda.hasMany(ProductoStock, { foreignKey: 'id_tienda' });
ProductoStock.belongsTo(Tienda, { foreignKey: 'id_tienda' });

Tienda.hasMany(Pedido, { foreignKey: 'id_tienda' });
Pedido.belongsTo(Tienda, { foreignKey: 'id_tienda' });

Pedido.hasMany(PedidoProducto, { foreignKey: 'id_pedido' });
PedidoProducto.belongsTo(Pedido, { foreignKey: 'id_pedido' });

Producto.hasMany(PedidoProducto, { foreignKey: 'id_producto' });
PedidoProducto.belongsTo(Producto, { foreignKey: 'id_producto' });

Promocion.hasMany(PedidoProducto, { foreignKey: 'id_promocion' });
PedidoProducto.belongsTo(Promocion, { foreignKey: 'id_promocion' });

module.exports = {
  Tienda,
  TiendaPromocion,
  Promocion,
  Producto,
  ProductoCategoria,
  Categoria,
  ProductoStock,
  Pedido,
  PedidoProducto
};