import app from "./app.js"; // On importe App
import { createServer } from "http"; // On importe la fonction de creation du serveur de node.js
const PORT = process.env.PORT || 3500;
const nodeServer = createServer(app);
nodeServer.listen(PORT, () => {
  console.log("Port is listening at http://localhost:" + PORT);
});
