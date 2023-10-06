const AVATAR = "https://avatars.githubusercontent.com/u/25019123?v=4";
const USERNAME = "Michael";

const allMessages = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
};

const messageList = document.getElementById("message-list");

const createMessage = (avatar, author, message) => {
  const messageElem = document.createElement("div");
  messageElem.classList.add("msg");

  const avatarElem = document.createElement("img");
  avatarElem.classList.add("avatar");
  avatarElem.setAttribute("src", avatar);

  const messageContents = document.createElement("div");

  const authorElem = document.createElement("h3");
  authorElem.append(author);

  const messageContent = document.createElement("p");
  messageContent.append(message);

  messageElem.appendChild(avatarElem);
  messageElem.appendChild(messageContents);
  messageContents.appendChild(authorElem);
  messageContents.appendChild(messageContent);

  messageList.appendChild(messageElem);
};

const renderMessages = user => {
  while (messageList.firstChild) {
    messageList.removeChild(messageList.firstChild);
  }

  for (const message of allMessages[user]) {
    createMessage(AVATAR, USERNAME, message);
  }
};

let hasSentMessage = false;

let selectedUser = document.querySelector("nav > ul > li.selected");
const users = document.querySelectorAll("nav > ul > li");
for (const user of users) {
  const button = user.children[0];
  button.addEventListener("click", () => {
    selectedUser.classList.remove("selected");
    selectedUser = user;
    selectedUser.classList.add("selected");
    renderMessages(user.innerText);
  });
}

const inputForm = document.getElementById("input-form");
const inputElement = document.getElementById("message-input");
inputForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!hasSentMessage) {
    messageList.removeChild(messageList.firstChild);
    hasSentMessage = true;
  }

  const user = selectedUser.innerText;
  const message = inputElement.value;
  allMessages[user].push(message);
  renderMessages(user);
});
