const { Router } = require("express");
const { UserController } = require("../controllers/user.controller");

// archivo que contiene todas las rutas de user para una mejor organización de código
const router = Router();
// la ruta / nos indica que precede a su ruta padre, es decir /user
router.get("/", UserController.getUser);
// metodo post para recibir información desde el cliente
router.post("/", UserController.createUser);

module.exports = router;
