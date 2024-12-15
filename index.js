import express from "express";
import db from "./db.js";
import userRoutes from "./users.js";

const app = express();

const PORT = 3000;

app.use(express.json());

db.connectDB();

app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
