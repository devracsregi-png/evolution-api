import app from "./app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Evolution API rodando na porta ${PORT}`);
});
