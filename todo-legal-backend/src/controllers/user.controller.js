const User = require("../models/User");
const bcrypt = require("bcrypt");
// faker es usada para generar datos aleatorios para cada usuario con un numero de cédula
const faker = require("faker");

// la clase UserController es la encargada de la interación con la base de datos
class UserController {
  static async getUser(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username }).select(
        "-password"
      );
      if (!user) {
        res.status(404).json({
          message: "Usuario no encontrado",
        });
        return res.end();
      }
      // si existe lo enviamos al cliente
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Usuario no encontrado" });
    }
  }
  static async createUser(req, res) {
    try {
      // primer paso, verificar si el usuario existe
      const userExists = await User.findOne({ username: req.body.username });
      if (userExists) {
        res.status(400).json({
          message: "Usuario ya esta registrado",
        });
        return res.end();
      }
      // si no existe el usuario, procederemos a encryptar su contraseña para guardar el hash
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      req.body.name = faker.name.firstName();
      req.body.last_name = faker.name.lastName() + " " + faker.name.lastName();
      req.body.phone_number = faker.phone.phoneNumber();
      req.body.email = faker.internet.email();
      await User.create(req.body);
      res.status(200).json({
        message: "Usuario Creado con éxito",
      });
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al crear el usuario" + error,
      });
    }
  }
}

module.exports = { UserController };
