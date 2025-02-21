// Importar las dependencias necesarias
import axios from "axios";
import * as crypto from "crypto";
import dotenv from "dotenv";

// Descripción de las dependencias usadas
// TypeScript: Para compilar el código TypeScript a JavaScript.
// Express: Para crear un servidor web.
// Axios: Para realizar solicitudes HTTP
// Dotenv: Para gestionar variables de entorno.
// ts-node: Para ejecutar TypeScript directamente sin compilar.
// Nodemon: Para reiniciar automáticamente el servidor durante el desarrollo.

dotenv.config();
// Usar los credenciales de .env para autorizar la llamada a la API
// Si no tienes tus llaves, consiguelas en https://developer.marvel.com/
const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

//  Revisar la existencia de las llaves de autorización
if (!publicKey || !privateKey) {
  throw new Error("Faltan las API keys en el archivo .env");
}
// Construir la llamada de autorización que cumpla con el timestamp y el hash md5
const getMarvelApiUrl = (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const ts = new Date().getTime().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");
  // Crear un objeto urlParams que contenga los parámetros necesarios para realizar la llamada
  const urlParams = new URLSearchParams({
    apikey: publicKey,
    ts,
    hash,
    ...params,
  });
  // Devolver la llamada con los parámetros necesarios
  return `https://gateway.marvel.com/v1/public/${endpoint}?${urlParams.toString()}`;
};
// Exportar la url
export const fetchMarvelData = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const url = getMarvelApiUrl(endpoint, params);
  const response = await axios.get(url);
  return response.data;
};
