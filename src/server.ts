// Configurar el servidor
// Importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
import marvelRoutes from "./routes/marvelRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", marvelRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
