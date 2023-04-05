import { Request, Response } from "express";

import { GetProductService } from "../../services";

class GetProductController {
  async handle(req: Request, res: Response) {
    const service = new GetProductService();
    const result = await service.execute(req.query);

    return res.json(result);
  }
}

export { GetProductController };
