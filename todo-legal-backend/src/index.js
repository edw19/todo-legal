const { createConnection } = require("./utils/connectDB");
const { app } = require("./app");

async function main() {
  try {
    await createConnection();
    app.listen(app.get("port"));
    console.log(
      `Server for todo-legal-backend in http://localhost:${app.get("port")}`
    );
  } catch (error) {
    console.log(error);
  }
}

// funcion encargada de arancar la app, con la conexión a base de datos
main();
