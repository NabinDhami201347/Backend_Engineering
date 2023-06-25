// server.ts
import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import { routes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(helmet()); // Adds various HTTP headers for enhanced security
app.use(compression()); // Compresses response bodies for improved performance

// Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
