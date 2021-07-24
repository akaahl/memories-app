import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();

// middleware routes
app.use("/posts", postRoutes);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to db
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server up on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
