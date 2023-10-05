const AVATAR = "https://avatars.githubusercontent.com/u/25019123?v=4";
const USERNAME = "Michael";

const messageList = document.getElementById("message-list");

const createMessage = (avatar, username, message) => {
  const messageElem = document.createElement("div");
  messageElem.classList.add("msg");

  const avatarElem = document.createElement("img");
  avatarElem.setAttribute("src", avatar);
  avatarElem.classList.add("avatar");

  const messageContents = document.createElement("div");
  const authorElem = document.createElement("h3");
  authorElem.innerText = username;

  const messageContent = document.createElement("p");
  messageContent.innerText = message;

  messageElem.appendChild(avatarElem);
  messageElem.appendChild(messageContents);
  messageContents.appendChild(authorElem);
  messageContents.appendChild(messageContent);

  messageList.appendChild(messageElem);
};

const messageForm = document.getElementById("input-form");
const messageInput = document.getElementById("message-input");
messageForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!messageForm.dataset.hasMessages) {
    messageList.removeChild(messageList.childNodes[0]);
    messageForm.dataset.hasMessages = true;
  }

  createMessage(AVATAR, USERNAME, messageInput.value);
  messageInput.value = "";
});
