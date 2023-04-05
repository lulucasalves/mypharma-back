import "./database/mongodb";
import express from "express";
import { router } from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import ProductModel from "./models/products";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}!`);
});
