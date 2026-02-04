'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_productos_stocks', [
      // Bebidas
      { id: 1, cantidad: 120, id_tienda: 1, id_producto: 1, fecha_ingreso: '2024-01-15' },
      { id: 2, cantidad: 80, id_tienda: 2, id_producto: 1, fecha_ingreso: '2024-01-15' },
      { id: 3, cantidad: 200, id_tienda: 3, id_producto: 2, fecha_ingreso: '2024-01-16' },
      { id: 4, cantidad: 60, id_tienda: 4, id_producto: 2, fecha_ingreso: '2024-01-16' },

      // Granos
      { id: 5, cantidad: 150, id_tienda: 1, id_producto: 3, fecha_ingreso: '2024-01-17' },
      { id: 6, cantidad: 90, id_tienda: 5, id_producto: 4, fecha_ingreso: '2024-01-17' },
      { id: 7, cantidad: 110, id_tienda: 6, id_producto: 5, fecha_ingreso: '2024-01-17' },

      // Lácteos
      { id: 8, cantidad: 75, id_tienda: 2, id_producto: 6, fecha_ingreso: '2024-01-18' },
      { id: 9, cantidad: 130, id_tienda: 3, id_producto: 17, fecha_ingreso: '2024-01-18' },
      { id: 10, cantidad: 95, id_tienda: 4, id_producto: 18, fecha_ingreso: '2024-01-18' },

      // Aseo
      { id: 11, cantidad: 40, id_tienda: 1, id_producto: 11, fecha_ingreso: '2024-01-19' },
      { id: 12, cantidad: 70, id_tienda: 5, id_producto: 12, fecha_ingreso: '2024-01-19' },
      { id: 13, cantidad: 55, id_tienda: 6, id_producto: 13, fecha_ingreso: '2024-01-19' },

      // Snacks
      { id: 14, cantidad: 180, id_tienda: 2, id_producto: 14, fecha_ingreso: '2024-01-20' },
      { id: 15, cantidad: 160, id_tienda: 3, id_producto: 15, fecha_ingreso: '2024-01-20' },
      { id: 16, cantidad: 140, id_tienda: 4, id_producto: 16, fecha_ingreso: '2024-01-20' },
      { id: 17, cantidad: 100, id_tienda: 5, id_producto: 19, fecha_ingreso: '2024-01-20' },

      // Otros
      { id: 18, cantidad: 300, id_tienda: 1, id_producto: 20, fecha_ingreso: '2024-01-21' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_productos_stocks', null, {});
  },
};
