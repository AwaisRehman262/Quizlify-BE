import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import instituteRoutes from "./routes/instituteRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import examRoutes from "./routes/examRoutes.js";
import cors from "cors";
// import testRoutes from './routes/testRoutes.js';
import connectDB from "./db/config.js";

dotenv.config();

const app = express();

let corsOptions = {
  origin: "https://quizlify-seven.vercel.app",
  methods: "GET,POST,PUT,DELETE,",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json({ extended: false }));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/institute", instituteRoutes);
app.use("/api/v1/room", roomRoutes);
app.use("/api/v1/question", questionRoutes);
app.use("/api/v1/exam", examRoutes);
// app.use("/api/v1/test", testRoutes);

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
// Swagger setup

const PORT = process.env.PORT || 8080;

connectDB().then(() =>
  app.listen(PORT, () =>
    console.log("Server is Running on", `http://localhost:${PORT}`)
  )
);
