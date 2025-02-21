// Definir las rutas para la API
// Importar las dependencias necesarias
import express from "express";
import { getCharacters } from "../controllers/marvelController";

const router = express.Router();

router.get("/characters", getCharacters);

export default router;
