/**
 *
 * TODO:
 * - Se connecter au socket
 * - Detecter quand un utilisateur se connecte ou se deconnecte
 * - Un système d'envois de messagee
 * - Un système qui détecte quand un utilisateur est entrer d'ecrire ou qu'il a arreter d'ecrire
 */
import { Server } from "socket.io";
import app from "./app.js"; // On importe App
import { createServer } from "http"; // On importe la fonction de creation du serveur de node.js
const PORT = process.env.PORT || 3500;
const nodeServer = createServer(app);

// IO
const io = new Server(nodeServer);
// FIXED : Se connecter au socket, on detecte quand un utilisateur se connecter
io.on("connection", (socket) => {
  console.log("Socket connextion is initialized in backend");
  // Detecter quand un utilisateur se connecte ou se deconnecte
  socket.on("enter_pseudo", (pseudo) => {
    // On dit que la socket de mon utilisateur va avoir un s
    socket.pseudo = pseudo;
    // FIXED: On emet que on a un utilisateur qui vient de se connecter
    socket.broadcast.emit("newUser", pseudo);
  });
});
nodeServer.listen(PORT, () => {
  console.log("Port is listening at http://localhost:" + PORT);
});
