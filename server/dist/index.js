import express, {} from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Express testing endpoint"
    });
});
app.listen(port, () => {
    console.log("Server is running");
});
//# sourceMappingURL=index.js.map