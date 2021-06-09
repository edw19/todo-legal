const express = require("express");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const app = express();

// configuraciones del servidor
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// configuracion de middlewares, uso estos middlewares para que express pueda responder en formato json
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ruta inicial API
app.get("/", (req, res) => {
  res.json({
    name: "Edwin Patricio Narváez",
    topic: "API for Todo Legal",
  });
});

// rutas de la app para crear usuario y autenticar usuarios
app.use("/auth/login", authRoutes);
app.use("/user", userRoutes);

module.exports = { app };
