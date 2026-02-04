const { Producto, ProductoStock, Tienda, PedidoProducto } = require('../models');
const { sequelize } = require('../config/database');

/**
 * Obtiene productos con stock por tienda
 * @function obtenerProductosConStock
 * @description Obtiene una lista de productos junto con su stock en cada tienda.
 * @param No recibe parámetros
 * @returns {Array} Lista de productos con su stock en cada tienda
 */
const obtenerProductosConStock = async () => {
  const productos = await Producto.findAll({
    attributes: ['id', 'nombre', 'presentacion'],
    where: { estado: 1 },
    include: [
      {
        model: ProductoStock,
        attributes: ['cantidad'],
        include: [
          {
            model: Tienda,
            attributes: ['id', 'nombre'],
          },
        ],
      },
    ],
  });

  return productos.map((producto) => ({
    idProducto: producto.id,
    nombre: producto.nombre,
    presentacion: producto.presentacion,
    tiendas: producto.ProductoStocks.map((productoEnStock) => ({
      idTienda: productoEnStock.Tienda.id,
      nombre: productoEnStock.Tienda.nombre,
      stock: Number(productoEnStock.cantidad),
    })),
  }));
}

/**
 * Obtiene los 10 productos más vendidos
 * @function obtenerProductosMasVendidos
 * @description Obtiene una lista de los 10 productos más vendidos junto con la cantidad de unidades vendidas.
 * @param No recibe parámetros
 * @returns {Array} Lista de productos más vendidos
 */
const obtenerProductosMasVendidos = async () => {
  const productos = await Producto.findAll({
    attributes: [
      'id',
      'nombre',
      'presentacion',
      [
        sequelize.fn('SUM', sequelize.col('PedidoProductos.cantidad')),
        'unidadesVendidas',
      ],
    ],
    include: [
      {
        model: PedidoProducto,
        attributes: [],
        required: true,
      },
    ],
    where: { estado: 1 },
    group: ['Producto.id'],
    order: [[sequelize.literal('"unidadesVendidas"'), 'DESC']],
    limit: 10,
    subQuery: false,
  });

  return productos.map((producto) => ({
    idProducto: producto.id,
    nombre: producto.nombre,
    presentacion: producto.presentacion,
    unidadesVendidas: Number(producto.get('unidadesVendidas')),
  }));
}

module.exports = {
  obtenerProductosConStock,
  obtenerProductosMasVendidos,
};
