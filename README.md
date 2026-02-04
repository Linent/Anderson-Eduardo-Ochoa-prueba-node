# Market API - Prueba Técnica Node.js

API REST para gestión de tiendas, productos, pedidos y promociones desarrollada con Node.js, Express y Sequelize.

## 📋 Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Configuración del Entorno](#️configuración-del-entorno)
- [Instrucciones para ejecutar la API](#instrucciones-para-ejecutar-la-api)
- [Endpoints](#endpoints)
- [Documentación API](#documentación-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)

## Tecnologías

- **Node.js** v18+
- **Express** v4.18
- **Sequelize** v6 (ORM)
- **PostgreSQL** v14+
- **Swagger** (Documentación)

## Requisitos Previos

- Node.js v18 o superior
- PostgreSQL v14 o superior
- npm o yarn

## Configuración del Entorno

### 1. Clonar el repositorio
```bash
git clone https://github.com/Linent/Anderson-Eduardo-Ochoa-prueba-node.git
cd Anderson-Eduardo-Ochoa-prueba-node
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:
```env
NODE_ENV=development
PORT=3000

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=market_db
DB_USER=root
DB_PASSWORD=tu_password
```

### 4. Configurar la base de datos

El proyecto incluye scripts para crear las tablas y cargar datos de prueba utilizando Sequelize, ejecuta 1 por una.

### Crear las tablas y cargar datos iniciales

```bash
# Crear las tablas en la base de datos
npm run db:create

# Ejecutar los seeders para cargar datos de prueba
npm run db:seed
```

## Instrucciones para ejecutar la API

### Modo desarrollo

```bash
# Iniciar el servidor en modo desarrollo
npm run dev
```

El servidor se ejecutará en ejemplo: `http://localhost:3000`

## Endpoints

### 1. Listar productos con stock por tienda
```http
GET /api/productos
```

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idProducto": 95,
      "nombre": "Gaseosa postobon",
      "presentacion": "355ml",
      "tiendas": [
        {
          "idTienda": 2,
          "nombre": "Mas x menos",
          "stock": 100
        }
      ]
    }
  ]
}
```

### 2. Productos más vendidos (Top 10)
```http
GET /api/productos/mas-vendidos
```

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idProducto": 95,
      "nombre": "Gaseosa postobon",
      "presentacion": "355ml",
      "unidadesVendidas": 56
    }
  ]
}
```

### 3. Categorías con productos
```http
GET /api/categorias
```

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idCategoria": 12,
      "nombre": "Frutas y venduras",
      "cantProductos": 20
    }
  ]
}
```

### 4. Promociones por día de la semana
```http
GET /api/promociones?dia=3
```

**Parámetros:**
- `dia` (required): Día de la semana (1=Lunes, 2=Martes, 3=Miércoles, ..., 7=Domingo)

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idPromocion": 1,
      "nombre": "Miercoles felices",
      "tiendas": ["mas x menos", "exito", "D1"]
    }
  ]
}
```

## Documentación API

La documentación completa de la API está disponible en Swagger UI:
```
http://localhost:3000/api-docs
```

## Estructura del Proyecto
```
market-api/
├── src/
│   ├── config/           # Configuraciones
│   │   ├── config.js
│   │   └── database.js
│   │   └── database.config.js
│   ├── controllers/      # Controladores
│   │   ├── productoController.js
│   │   ├── categoriaController.js
│   │   └── promocionController.js
│   ├── models/          # Modelos Sequelize
│   │   ├── index.js
│   │   ├── associations.js
│   │   └── ... los demás modelos
│   ├── routes/          # Rutas
│   │   ├── productoRoutes.js
│   │   ├── categoriaRoutes.js
│   │   └── promocionRoutes.js
│   ├── docs/            # Documentación Swagger
│   │   └── swagger.yaml
│   ├── app.js           # Configuración Express
│   └── server.js        # Punto de entrada
├── seeders/             # Datos de prueba
├── .env                 # Variables de entorno
├── .gitignore
├── package.json
└── README.md
```

## Scripts Disponibles
```bash

ejecutar uno a uno esto solo una vez al empezar el proyecto luego no es necesario

# Ejecutar creación de la BD
npm run db:create

# Ejecutar seeders
npm run seed

# Revertir seeders
npm run seed:undo

# Iniciar servidor en modo desarrollo
npm run dev
```

## Autor

### Anderson Eduardo Ochoa Peñaranda

## Licencia
```
ISC
```

## .gitignore
  - node_modules/
  - .env
  - entre otros...
## Dependencies
node_modules/

## Environment variables
.env