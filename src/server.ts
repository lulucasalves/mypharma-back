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

// ProductModel.create({
//   name: "Vitamina B12 Gotas",
//   price: 44.9,
//   description:
//     "No formato Metilcobalamina - versão natural e ativa, auxilia no funcionamento do sistema imune e também na formação de células vermelhas do sangue.",
//   category: "Vitaminas",
//   image:
//     "https://raw.githubusercontent.com/lulucasalves/mypharma-back/main/.github/b12.webp",
// });

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}!`);
});
