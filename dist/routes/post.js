"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit);
    console.log("🚀 ~ app.get ~ limit:", limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json("success");
    }
    res.status(400).json("nope");
});
exports.default = router;
