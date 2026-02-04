'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_productos_categorias', [
      // Bebidas
      { id: 1, id_categoria: 1, id_producto: 1 },
      { id: 2, id_categoria: 1, id_producto: 2 },
      { id: 3, id_categoria: 1, id_producto: 20 },

      // Granos y abarrotes
      { id: 4, id_categoria: 2, id_producto: 3 },
      { id: 5, id_categoria: 2, id_producto: 4 },
      { id: 6, id_categoria: 2, id_producto: 5 },

      // Lácteos
      { id: 7, id_categoria: 3, id_producto: 6 },
      { id: 8, id_categoria: 3, id_producto: 17 },
      { id: 9, id_categoria: 3, id_producto: 18 },

      // Aseo
      { id: 10, id_categoria: 4, id_producto: 11 },
      { id: 11, id_categoria: 4, id_producto: 12 },
      { id: 12, id_categoria: 4, id_producto: 13 },

      // Snacks
      { id: 13, id_categoria: 5, id_producto: 14 },
      { id: 14, id_categoria: 5, id_producto: 15 },
      { id: 15, id_categoria: 5, id_producto: 16 },
      { id: 16, id_categoria: 5, id_producto: 19 },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_productos_categorias', null, {});
  },
};
