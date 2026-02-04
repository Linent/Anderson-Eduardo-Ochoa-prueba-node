'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('market_tiendas_promociones', [
      
      { id: 1, estado: 1, id_tienda: 1, id_promocion: 1, inicio: '2026-01-01', fin: '2026-12-31' }, 
      { id: 2, estado: 1, id_tienda: 2, id_promocion: 1, inicio: '2026-01-01', fin: '2026-12-31' },
      { id: 3, estado: 1, id_tienda: 3, id_promocion: 1, inicio: '2026-01-01', fin: '2026-12-31' }, 

      
      { id: 4, estado: 1, id_tienda: 4, id_promocion: 5, inicio: '2026-01-01', fin: '2026-12-31' }, 
      { id: 5, estado: 1, id_tienda: 1, id_promocion: 5, inicio: '2026-01-01', fin: '2026-12-31' },
      { id: 6, estado: 1, id_tienda: 4, id_promocion:9, inicio: '2026-01-01', fin: '2026-12-31' },
    
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('market_tiendas_promociones', null, {});
  },
};
