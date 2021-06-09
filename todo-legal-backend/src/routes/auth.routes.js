const { Router } = require("express");
const { AuthController } = require("../controllers/auth.controller");

// archivo que contiene todas las rutas de auth para una mejor organización de código
const router = Router();
// la ruta / nos indica que precede a su ruta padre, es decir /auth/login
router.post("/", AuthController.logIn);

module.exports = router;
