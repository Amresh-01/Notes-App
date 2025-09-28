import express from "express";
import connectDB from "./db/db.connect";
import dotenv from "dotenv";
import cors from "cors";

// Load env variables
dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors()); // Sare port ko allow kr deta hai ki frontend backend se request response exchange ho..
app.use(express.json()); // ye Json Data samjh lega

app.use("/api", apiroutes);
app.use("/api/notes", notesRoutes);

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
