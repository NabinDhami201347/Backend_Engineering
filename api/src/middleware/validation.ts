// middleware/validation.ts
import { body } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRegistration = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").notEmpty().isEmail().withMessage("Invalid email address."),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
