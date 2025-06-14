import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)
app.listen(3000, () => {
	console.log("Servidor escutando...");
});


