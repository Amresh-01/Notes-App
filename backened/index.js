import express from "express";
import connectDB from "./src/db/db.connect.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import notesRoutes from "./src/routes/notesRoutes.js";

// Load env variables
dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
})); // Sare port ko allow kr deta hai ki frontend backend se request response exchange ho..
app.use(express.json()); // ye Json Data samjh lega

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send(" Notes API is running...");
});

const StartServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server..", err.message);
    process.exit(1);
  }
};

StartServer();
