import express from "express";
import cors from "cors";
import instanceRoutes from "./routes/instanceRoutes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", instanceRoutes);

export default app;
