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
//   name: "Lipikar Loção Hidratante",
//   price: 122.91,
//   description:
//     "Maravilhoso hidratante corporal com efeito calmante. Sua fórmula contém manteiga de karité e glicerina para hidratar a pele e Alta concentração de Água Termal de La Roche-Posay.",
//   category: "Cosméticos",
//   image:
//     "https://raw.githubusercontent.com/lulucasalves/mypharma-back/main/.github/lipikar.webp",
// });

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}!`);
});
