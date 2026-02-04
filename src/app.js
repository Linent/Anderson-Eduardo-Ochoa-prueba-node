const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');


const productosRoutes = require('./routes/productosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const promocionesRoutes = require('./routes/promocionesRoutes');
const API = 'api';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


const swaggerDocument = YAML.load(path.join(__dirname, 'docs', 'swagger.yaml'));
app.use(`/${API}-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Market API Documentation"
}));

// Routes
app.use(`/${API}/productos`, productosRoutes);
app.use(`/${API}/categorias`, categoriasRoutes);
app.use(`/${API}/promociones`, promocionesRoutes);

// Ruta de bienvenida a la API
app.get('/', (req, res) => {
  res.json({
    message: 'API Market funcionando 🚀',
    version: '1.0.0',
    documentation: '/api-docs',
    endpoints: {
      productos: '/api/productos',
      productosMasVendidos: '/api/productos/mas-vendidos',
      categorias: '/api/categorias',
      promociones: '/api/promociones?dia=3'
    }
  });
});


app.use((req, res) => {
  res.status(404).json({
    message: 'Ruta no encontrada',
    path: req.path
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = app;