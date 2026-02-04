'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_pedidos_productos', [
      // Pedido 1 (Tienda 1)
      {
        id: 1,
        id_pedido: 1,
        id_producto: 1,
        cantidad: 5,
        valor_unitario: 2500,
        valor_unitario_promocion: 2500,
        total_teorico: 12500,
        total_final: 12500,
        id_promocion: null,
      },
      {
        id: 2,
        id_pedido: 1,
        id_producto: 3,
        cantidad: 3,
        valor_unitario: 4200,
        valor_unitario_promocion: 4200,
        total_teorico: 12600,
        total_final: 12600,
        id_promocion: null,
      },

      // Pedido 2 (Tienda 2)
      {
        id: 3,
        id_pedido: 2,
        id_producto: 2,
        cantidad: 6,
        valor_unitario: 3500,
        valor_unitario_promocion: 3500,
        total_teorico: 21000,
        total_final: 21000,
        id_promocion: null,
      },
      {
        id: 4,
        id_pedido: 2,
        id_producto: 15,
        cantidad: 4,
        valor_unitario: 2800,
        valor_unitario_promocion: 2800,
        total_teorico: 11200,
        total_final: 11200,
        id_promocion: null,
      },

      // Pedido 3 (Tienda 3)
      {
        id: 5,
        id_pedido: 3,
        id_producto: 1,
        cantidad: 8,
        valor_unitario: 2500,
        valor_unitario_promocion: 2300,
        total_teorico: 20000,
        total_final: 18400,
        id_promocion: 1,
      },
      {
        id: 6,
        id_pedido: 3,
        id_producto: 6,
        cantidad: 5,
        valor_unitario: 4200,
        valor_unitario_promocion: 4200,
        total_teorico: 21000,
        total_final: 21000,
        id_promocion: null,
      },

      // Pedido 4 (Tienda 4)
      {
        id: 7,
        id_pedido: 4,
        id_producto: 2,
        cantidad: 7,
        valor_unitario: 3500,
        valor_unitario_promocion: 3300,
        total_teorico: 24500,
        total_final: 23100,
        id_promocion: 1,
      },
      {
        id: 8,
        id_pedido: 4,
        id_producto: 15,
        cantidad: 6,
        valor_unitario: 2800,
        valor_unitario_promocion: 2800,
        total_teorico: 16800,
        total_final: 16800,
        id_promocion: null,
      },

      // Pedido 5 (Tienda 5)
      {
        id: 9,
        id_pedido: 5,
        id_producto: 1,
        cantidad: 10,
        valor_unitario: 2500,
        valor_unitario_promocion: 2300,
        total_teorico: 25000,
        total_final: 23000,
        id_promocion: 1,
      },
      {
        id: 10,
        id_pedido: 5,
        id_producto: 3,
        cantidad: 4,
        valor_unitario: 4200,
        valor_unitario_promocion: 4200,
        total_teorico: 16800,
        total_final: 16800,
        id_promocion: null,
      },

      // Pedido 6 (Tienda 6)
      {
        id: 11,
        id_pedido: 6,
        id_producto: 2,
        cantidad: 9,
        valor_unitario: 3500,
        valor_unitario_promocion: 3500,
        total_teorico: 31500,
        total_final: 31500,
        id_promocion: null,
      },
      {
        id: 12,
        id_pedido: 6,
        id_producto: 6,
        cantidad: 3,
        valor_unitario: 4200,
        valor_unitario_promocion: 4200,
        total_teorico: 12600,
        total_final: 12600,
        id_promocion: null,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_pedidos_productos', null, {});
  },
};
