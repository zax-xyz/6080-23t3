const tabs = document.getElementById("tabs");
const panels = document.getElementById("panels");

let activeTab = document.querySelector(".tab.active");
let activePanel = document.querySelector(".panel.active");

[...tabs.children].forEach((tab, i) => {
  tab.addEventListener("click", () => {
    activeTab.classList.remove("active");
    activeTab = tab;
    activeTab.classList.add("active");

    activePanel.classList.remove("active");
    activePanel = panels.children[i];
    activePanel.classList.add("active");

    panels.style.transform = `translateX(-${21 * i}rem)`;
  });
});
