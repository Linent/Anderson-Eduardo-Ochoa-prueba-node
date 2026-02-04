const promocionService = require('../services/promocionService');

exports.listarPromocionesPorDia = async (req, res) => {
  try {
    const diaNum = Number(req.query.dia);

    if (!Number.isInteger(diaNum) || diaNum < 1 || diaNum > 7) {
      return res.status(400).json({
        message: 'El día debe ser un número entre 1 (lunes) y 7 (domingo)',
      });
    }

    const promociones = await promocionService.obtenerPromocionesPorDia(diaNum);

    return res.status(200).json({
      message: 'consultado correctamente',
      data: promociones,
    });
  } catch (error) {
    console.error('Error al listar promociones:', error);
    return res.status(500).json({
      message: 'Error interno',
      error: error.message,
    });
  }
};
