'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_categorias', [
      {
        id: 1,
        nombre: 'Bebidas',
        adultos: 0,
      },
      {
        id: 2,
        nombre: 'Granos y abarrotes',
        adultos: 0,
      },
      {
        id: 3,
        nombre: 'Lácteos',
        adultos: 0,
      },
      {
        id: 4,
        nombre: 'Aseo',
        adultos: 0,
      },
      {
        id: 5,
        nombre: 'Snacks',
        adultos: 0,
      },
      {
        id: 6,
        nombre: 'Productos para adultos',
        adultos: 1,
      },
      {
        id: 7,
        nombre: 'panaderia',
        adultos: 0,
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_categorias', null, {});
  },
};
