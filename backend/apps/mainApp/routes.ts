import { Router } from "express";
import Controller from "./controller";

const router: Router = Router();

router.get("/foo", Controller.getFoo);
router.post("/foo", Controller.postFoo);

export default router;
