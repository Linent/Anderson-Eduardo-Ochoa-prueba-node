const { Promocion, TiendaPromocion, Tienda } = require('../models');
const { Op } = require('sequelize');

/**
 * Obtiene promociones válidas para un día específico
 * @function obtenerPromocionesPorDia
 * @promise {Array} - Lista de promociones válidas con tiendas asociadas
 * @param {number} diaNum - Día de la semana (1 = lunes, 7 = domingo)
 * @return {Array} Lista de promociones con tiendas asociadas
 */

async function obtenerPromocionesPorDia(diaNum) {
    const diaIndex = diaNum - 1;

    const fechaActual = new Date().toLocaleDateString('sv-SE', {
        timeZone: 'America/Bogota',
    });

    const promociones = await Promocion.findAll({
        attributes: ['id', 'nombre', 'dias_semana'],
        where: { estado: 1 },
        include: [
            {
                model: TiendaPromocion,
                as: 'tiendas_asociadas',
                attributes: ['id'],
                required: false,
                where: {
                    inicio: { [Op.lte]: fechaActual },
                    fin: { [Op.gte]: fechaActual },
                },
                include: [
                    {
                        model: Tienda,
                        attributes: ['nombre'],
                    },
                ],
            },
        ],
        subQuery: false,
    });

    return promociones
        .map(promocion => promocion.toJSON())
        .filter(
            promocion =>
                promocion.dias_semana &&
                promocion.dias_semana.length === 7 &&
                promocion.dias_semana[diaIndex] === '1'
        )
        .map(promocion => ({
            idPromocion: promocion.id,
            nombre: promocion.nombre,
            tiendas: promocion.tiendas_asociadas
                ? promocion.tiendas_asociadas
                    .map(tp => (tp.Tienda ? tp.Tienda.nombre : null))
                    .filter(Boolean)
                : [],
        }));
}

module.exports = {
    obtenerPromocionesPorDia,
};
