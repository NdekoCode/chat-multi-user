const socket = io.connect("http://localhost:3500/chat");
// socket.on("connect", (io) => {
//   console.log("connexion initialize in front");
// });

let pseudo;
while (!pseudo) {
  pseudo = prompt("Quel est votre nom ?");
}
socket.emit("enter_pseudo", pseudo);
document.title = `${pseudo} | ${document.title}`;

socket.on("newUser", (pseudo) => {});
const el = document.getElementById("messages");
if (el !== null) {
  el.scrollTop = el.scrollHeight;
}
