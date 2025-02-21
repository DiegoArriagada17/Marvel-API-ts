module.exports = {
  apps: [
    {
      name: "Marvel-API-ts",
      script: "dist/server.js", // Archivo de entrada compilado
      interpreter: "node", // Usar Node.js como intérprete
      watch: true, // Monitorear cambios en los archivos
      ignore_watch: ["node_modules", "logs"], // Ignorar estas carpetas
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
