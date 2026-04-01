import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/user", userRoutes);

app.get("/api/test", (req: Request, res: Response) => {
    res.json({ 
        success: true,
        message: "Express testing endpoint",
    })
});

app.listen(port, () => {
    console.log("Server is running");
});
