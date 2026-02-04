'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_pedidos_productos', [
      // Pedido 1
      { id: 1, id_pedido: 1, id_producto: 1, cantidad: 5, valor_unitario: 2500, valor_unitario_promocion: 2500, total_teorico: 12500, total_final: 12500, id_promocion: null },
      { id: 2, id_pedido: 1, id_producto: 2, cantidad: 3, valor_unitario: 3500, valor_unitario_promocion: 3500, total_teorico: 10500, total_final: 10500, id_promocion: null },

      // Pedido 2
      { id: 3, id_pedido: 2, id_producto: 3, cantidad: 6, valor_unitario: 4200, valor_unitario_promocion: 4200, total_teorico: 25200, total_final: 25200, id_promocion: null },
      { id: 4, id_pedido: 2, id_producto: 4, cantidad: 4, valor_unitario: 2800, valor_unitario_promocion: 2800, total_teorico: 11200, total_final: 11200, id_promocion: null },

      // Pedido 3
      { id: 5, id_pedido: 3, id_producto: 5, cantidad: 8, valor_unitario: 2500, valor_unitario_promocion: 2300, total_teorico: 20000, total_final: 18400, id_promocion: 1 },
      { id: 6, id_pedido: 3, id_producto: 6, cantidad: 5, valor_unitario: 4200, valor_unitario_promocion: 4200, total_teorico: 21000, total_final: 21000, id_promocion: null },

      // Pedido 4
      { id: 7, id_pedido: 4, id_producto: 7, cantidad: 7, valor_unitario: 3500, valor_unitario_promocion: 3300, total_teorico: 24500, total_final: 23100, id_promocion: 1 },
      { id: 8, id_pedido: 4, id_producto: 8, cantidad: 6, valor_unitario: 2800, valor_unitario_promocion: 2800, total_teorico: 16800, total_final: 16800, id_promocion: null },

      // Pedido 5
      { id: 9, id_pedido: 5, id_producto: 9, cantidad: 10, valor_unitario: 2500, valor_unitario_promocion: 2300, total_teorico: 25000, total_final: 23000, id_promocion: 1 },

      // Pedido 6
      { id: 10, id_pedido: 6, id_producto: 10, cantidad: 9, valor_unitario: 3500, valor_unitario_promocion: 3500, total_teorico: 31500, total_final: 31500, id_promocion: null },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_pedidos_productos', null, {});
  },
};
