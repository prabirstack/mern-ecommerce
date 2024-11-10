import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// create a database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Database Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port: ${PORT}`));
