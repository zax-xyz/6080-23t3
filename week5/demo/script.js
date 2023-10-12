const root = document.getElementById("root");

const clearElem = elem => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};
