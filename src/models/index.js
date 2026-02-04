
require('./associations.js');

module.exports = {
  Tienda: require('./Tienda'),
  TiendaPromocion: require('./TiendaPromocion'),
  Promocion: require('./Promocion'),
  Producto: require('./Producto'),
  ProductoCategoria: require('./ProductoCategoria'),
  Categoria: require('./Categoria'),
  ProductoStock: require('./ProductoStock'),
  Pedido: require('./Pedido'),
  PedidoProducto: require('./PedidoProducto')
};