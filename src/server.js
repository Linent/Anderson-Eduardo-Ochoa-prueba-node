const config = require("./config/config");
const db = require("./config/database");
const app = require("./app");

const PORT = config.PORT;

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT} \nSwagger: API Docs: http://localhost:${PORT}/api-docs
      `);
        });
    })
    .catch((error) => {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    });