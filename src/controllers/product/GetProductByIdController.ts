import { Request, Response } from "express";

import { GetProductByIdService } from "../../services";

class GetProductByIdController {
  async handle(req: Request, res: Response) {
    const service = new GetProductByIdService();
    const result = await service.execute(req.params.id);

    return res.json(result);
  }
}

export { GetProductByIdController };
