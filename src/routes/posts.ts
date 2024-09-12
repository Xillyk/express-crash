import express, { Request, Response } from "express";
const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
router.get("/", (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string);
  console.log("🚀 ~ app.get ~ limit:", limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json("success");
  }

  res.status(400).json("nope");
});

export default router;
