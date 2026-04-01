import express from "express";
import { login, logout, signup, } from "../controllers/user.controller.js";
import { signupSchema, loginSchema } from "../schema/validate.js";
import { validateRequest } from "../middleware/validate.js";
const router = express.Router();
router.post("/signup", validateRequest(signupSchema), signup);
router.post("/login", validateRequest(loginSchema), login);
router.post("/logout", logout);
export default router;
//# sourceMappingURL=user.route.js.map