import { Router } from "express";

import { GetProductController, GetCategoryController } from "./controllers";

const router = Router();

router.get("/product", new GetProductController().handle);
router.get("/category", new GetCategoryController().handle);

export { router };
