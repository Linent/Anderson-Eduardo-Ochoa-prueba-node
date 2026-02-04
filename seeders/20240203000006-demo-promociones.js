'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_promociones', [
      {
        id: 1,
        estado: 1,
        nombre: 'Miercoles Felices',
        imagen: 'miercoles_felices.jpg',
        porcentaje: 20,
        dias_semana: '0010000', // Miércoles
      },
      {
        id: 5,
        estado: 1,
        nombre: 'Miercoles de 2x1',
        imagen: 'miercoles_2x1.jpg',
        porcentaje: 50,
        dias_semana: '0010000', // Miércoles
      },
      {
        id: 8,
        estado: 1,
        nombre: 'Promocion solo los miercoles',
        imagen: 'solo_miercoles.jpg',
        porcentaje: 15,
        dias_semana: '0010000', // Miércoles
      },
      {
        id: 9,
        estado: 1,
        nombre: 'Promo Fin de Semana',
        imagen: 'fin_semana.jpg',
        porcentaje: 25,
        dias_semana: '0000011', // Sábado y Domingo
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_promociones', null, {});
  },
};
