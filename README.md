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
DB_HOST=
DB_PORT=5432
DB_NAME=market
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

El servidor se ejecutará por en ejemplo: `http://localhost:3000`

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

### Uso de Swagger (Documentación Interactiva)

El proyecto incluye documentación interactiva de la API utilizando Swagger UI, lo que permite visualizar y probar todos los endpoints directamente desde el navegador.

### Acceso a Swagger

Con el proyecto en ejecución, accede a la siguiente URL:

http://localhost:3000/api-docs


En esta interfaz podrás ver todas las rutas disponibles de la API organizadas por endpoint.

### Cómo probar los endpoints

Abre la ruta http://localhost:3000/api-docs en el navegador.

Verás un listado de endpoints disponibles:

/api/productos

/api/productos/mas-vendidos

/api/categorias

/api/promociones

Haz clic sobre el acordeón de la ruta que deseas probar.

Presiona el botón "Try it out".

(Si aplica) Ingresa los parámetros requeridos.

Haz clic en "Execute" para enviar la solicitud.

Revisa la respuesta que devuelve la API.

### Descripción de los Endpoints
🔹 /api/productos

Lista todos los productos activos junto con el stock disponible en cada tienda.

Qué se verá:

Identificador del producto

Nombre

Presentación

Listado de tiendas con su respectivo stock

🔹 /api/productos/mas-vendidos

Obtiene los 10 productos más vendidos, ordenados de mayor a menor según la cantidad total vendida.

Qué se verá:

Identificador del producto

Nombre

Presentación

Total de unidades vendidas

🔹 /api/categorias

Lista las categorías que tienen productos asociados, mostrando cuántos productos hay por categoría.

Qué se verá:

Identificador de la categoría

Nombre

Cantidad de productos asociados

🔹 /api/promociones

Lista las promociones activas que aplican según un día de la semana.

Parámetro requerido:

dia → Número del día de la semana
(1 = Lunes, 2 = Martes, ..., 7 = Domingo)

Ejemplo:

/api/promociones?dia=3


Qué se verá:

Identificador de la promoción

Nombre de la promoción

Listado de tiendas donde la promoción está disponible para el día indicado

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