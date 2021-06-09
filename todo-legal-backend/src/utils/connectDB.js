const { connect } = require("mongoose");

// la cadena de conexión debe ir en una variable de entorno
// para este caso he creado un usuario temporal en MongoDb
const URI_MONGO_DB =
  "mongodb://todolegal:todolegal2021@cluster0-shard-00-00.mqoho.mongodb.net:27017,cluster0-shard-00-01.mqoho.mongodb.net:27017,cluster0-shard-00-02.mqoho.mongodb.net:27017/todo-legal?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

// función que llama a la conexión externa con mongodb
async function createConnection() {
  try {
    await connect(URI_MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Db is connected");
  } catch (error) {
    process.exit(0);
  }
}

module.exports = { createConnection };
