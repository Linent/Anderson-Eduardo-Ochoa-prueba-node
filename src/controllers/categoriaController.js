const categoriaService = require('../services/categoriaService');

exports.listarCategorias = async (req, res) => {
  try {
    const data = await categoriaService.obtenerCategoriasConProductos();

    res.status(200).json({
      message: 'consultado correctamente',
      data,
    });
  } catch (error) {
    console.error('Error al listar categorías:', error);
    res.status(500).json({
      message: 'Error al consultar categorías',
      error: error.message,
    });
  }
};
