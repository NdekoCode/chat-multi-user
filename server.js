import { Server } from "socket.io";
import app from "./app.js"; // On importe App
import { createServer } from "http"; // On importe la fonction de creation du serveur de node.js
const PORT = process.env.PORT || 3500;
const nodeServer = createServer(app);

// IO
const io = new Server(nodeServer);

// TODO
io.on("connection", (socket) => {});
nodeServer.listen(PORT, () => {
  console.log("Port is listening at http://localhost:" + PORT);
});
