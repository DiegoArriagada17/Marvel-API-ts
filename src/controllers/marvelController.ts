// El controlador se encarga del manejo de solicitudes
// Importar las dependencias necesarias
import { Request, Response } from "express";
import { fetchMarvelData } from "../utils/marvelApi";

// Crear una función que obtenga los Personajes
export const getCharacters = async (req: Request, res: Response) => {
  // Crear un try catch para el manejo de errores
  try {
    // Usar fetchMarvelData para llamar la data de Personajes
    const data = await fetchMarvelData("characters");
    res.json(data);
    // Si la llamada no funciona, encapsular el error
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los personajes de Marvel" });
  }
};
