import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res
    .status(500)
    .json({ status: "error", message: "Internal Server Error" });
});

app.get("/", (req, res) => {
  return res.json({ ola: "test" });
});

app.listen(5000, () => {
  console.log("server is running!");
});
