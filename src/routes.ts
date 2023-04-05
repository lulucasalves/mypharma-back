import { Router } from "express";

import { GetProductController, GetCategoryController } from "./controllers";
import { GetProductByIdController } from "./controllers/product/GetProductByIdController";

const router = Router();

router.get("/product", new GetProductController().handle);
router.get("/product/:id", new GetProductByIdController().handle);

router.get("/category", new GetCategoryController().handle);

export { router };
