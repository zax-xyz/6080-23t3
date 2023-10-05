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

const renderMessages = user => {
  // clear messages
  while (messageList.firstChild) {
    messageList.removeChild(messageList.firstChild);
  }

  const messages = allMessages[user];
  if (messages.length === 0) {
    messageList.append("There are no messages yet. Type something to send one!");
  } else {
    for (const message of allMessages[user]) {
      createMessage(AVATAR, USERNAME, message);
    }
  }
};

let selectedUser = document.querySelector("nav > ul > li.selected");

const users = document.querySelectorAll("nav > ul > li");
users.forEach(user => {
  user.children[0].addEventListener("click", () => {
    selectedUser.classList.remove("selected");
    selectedUser = user;
    selectedUser.classList.add("selected");
    renderMessages(selectedUser.innerText);
  });
});

messageForm.addEventListener("submit", e => {
  e.preventDefault();

  allMessages[selectedUser.innerText].push(messageInput.value);
  renderMessages(selectedUser.innerText);
  messageInput.value = "";
});
