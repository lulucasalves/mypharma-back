import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

class Connection {
  constructor() {
    this.databaseConnect();
  }
  async databaseConnect() {
    await mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.log(error));
  }
}

module.exports = new Connection();
