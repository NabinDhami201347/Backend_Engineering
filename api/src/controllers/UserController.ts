// controllers/UserController.ts
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";
import { ApiResponse } from "../models/ApiResponse";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAllUsers();
      const response: ApiResponse = { success: true, data: users };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
      }
      const response: ApiResponse = { success: true, data: user };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const newUser = await this.userService.createUser(name, email, password);
      const response: ApiResponse = { success: true, data: newUser };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const updatedUser = await this.userService.updateUser(id, name, email, password);
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found." });
      }
      const response: ApiResponse = { success: true, data: updatedUser };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}
