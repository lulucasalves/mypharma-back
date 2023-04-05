import { Request, Response } from "express";

import { GetCategoryService } from "../../services";

class GetCategoryController {
  async handle(req: Request, res: Response) {
    const service = new GetCategoryService();
    const result = await service.execute();

    return res.json(result);
  }
}

export { GetCategoryController };
