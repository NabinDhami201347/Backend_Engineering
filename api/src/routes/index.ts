// routes.ts
import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { validateRegistration } from "./middleware/validation";

const router = Router();
const userController = new UserController();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", validateRegistration, userController.createUser);
router.put("/users/:id", validateRegistration, userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export { router as routes };
