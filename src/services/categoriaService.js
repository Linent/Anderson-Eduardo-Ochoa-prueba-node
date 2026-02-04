const { sequelize } = require('../config/database');

/**
 * @function obtenerCategoriasConProductos
 * @request Obtener categorías con al menos un producto
 * @param No recibe parámetros
 * @returns {Array} Lista de categorías con al menos un producto
 * @description Obtiene las categorías con al menos un producto, ordenadas por cantidad de productos (DESC)
 */
const obtenerCategoriasConProductos = async () => {
    const categorias = await sequelize.query(
        `SELECT
        c.id AS "idCategoria",
        c.nombre,
        COUNT(pc.id_producto) AS "cantProductos"
        FROM
        market_categorias c
        INNER JOIN market_productos_categorias pc ON c.id = pc.id_categoria
        GROUP BY
        c.id,
        c.nombre
        HAVING
        COUNT(pc.id_producto) > 0
        ORDER BY
        "cantProductos" DESC
    `,
        {
            type: sequelize.QueryTypes.SELECT,
        }
    );

    return categorias.map((categoria) => ({
        idCategoria: categoria.idCategoria,
        nombre: categoria.nombre,
        cantProductos: Number(categoria.cantProductos),
    }));
}

module.exports = {
    obtenerCategoriasConProductos,
};
