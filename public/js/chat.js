const socket = io();
// socket.on("connect", (io) => {
//   console.log("connexion initialize in front");
// });

let pseudo;
while (!pseudo) {
  pseudo = prompt("Quel est votre nom ?");
}
socket.on("connect", () => {
  console.log("initialize connection");
  const userConnect = document.getElementById("userConnect");
  console.log("new User");
  userConnect.innerHTML =
    pseudo[0].toUpperCase() + pseudo.substring(1, pseudo.length);
});
socket.emit("enter_pseudo", pseudo);
document.title = `${pseudo} | ${document.title}`;
const formUser = document.getElementById("form-message");
formUser.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userInput = document.getElementById("userWriter");
  console.log(userInput);
});
socket.on("newUser", (pseudo) => {
  createElementFunc("newUser", `${pseudo} vient de rejoindre le chat`);
});
socket.on("leaveUser", (pseudo) => {
  createElementFunc("leaveUser", `${pseudo} vient de quitter le chat`);
});
const el = document.getElementById("messages");
if (el !== null) {
  el.scrollTop = el.scrollHeight;
}

function createElementFunc(element, content) {
  const newElement = document.createElement("div");
  switch (element) {
    case "newUser":
      flashMessage(content);
      break;
    case "leaveUser":
      flashMessage(content);
      break;
    case "typing":
      isWriting(content);
      break;
    default:
      return null;
  }
}
function flashMessage(message) {
  const infos = document.querySelector("#infos");
  const alertInfos = document.querySelector("#alert-infos");
  infos.classList.remove("hidden");
  infos.classList.remove("inactive");
  infos.classList.add("active");
  alertInfos.innerHTML = message;
  setTimeout(() => {
    infos.classList.remove("active");
    infos.classList.add("inactive");
    infos.classList.add("hidden");
  }, 2500);
}
function isWriting(pseudo) {
  const isWriting = document.getElementById("isWriting");
  isWriting.innerHTML = `${pseudo} is writing... `;
}
