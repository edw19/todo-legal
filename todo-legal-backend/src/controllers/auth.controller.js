const User = require("../models/User");
const bcrypt = require("bcrypt");

// la clase AuthController es la encargada de verificar un usuario válido
class AuthController {
  static async logIn(req, res) {
    try {
      // primer paso, verificar si el usuario existe
      const userExists = await User.findOne({ username: req.body.username });
      if (!userExists) {
        // si no existe respondemos con un mensaje 400
        res
          .status(400)
          .json({ message: "Aun no te has registrado en el sistema" });
        return res.end();
        
      }
      //segundo paso, verificar que la contraseña coincida, usar bcrypt para comparar la contraseña
      // bcrypt devuelve true en caso de que la contraseña coicida si no retorna falso
      if (await bcrypt.compare(req.body.password, userExists.password)) {
        res.status(200).json({
          status: userExists.status,
          username: userExists.username,
          name: userExists.name,
          last_name: userExists.last_name,
          email: userExists.email
        });
        return res.end();
      }

      // si la contraseña no es igual, retornamos un mensaje al usuario

      res.status(400).json({ message: "Credenciales incorrectas" });
      res.end();
    } catch (error) {
      res.status(500).json(error);
      res.end();
    }
  }
}

module.exports = { AuthController };
