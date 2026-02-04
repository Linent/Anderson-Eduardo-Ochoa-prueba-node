const productoService = require('../services/productoService');


exports.listarProductos = async (req, res) => {
  try {
    const data = await productoService.obtenerProductosConStock();

    res.status(200).json({
      message: 'consultado correctamente',
      data,
    });
  } catch (error) {
    console.error('Error al listar productos:', error);
    res.status(500).json({ message: error.message });
  }
};


exports.productosMasVendidos = async (req, res) => {
  try {
    const data = await productoService.obtenerProductosMasVendidos();

    res.status(200).json({
      message: 'consultado correctamente',
      data,
    });
  } catch (error) {
    console.error('Error al listar productos más vendidos:', error);
    res.status(500).json({ message: error.message });
  }
};
