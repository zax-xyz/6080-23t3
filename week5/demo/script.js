const root = document.getElementById("root");

const clearElem = elem => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

class SearchPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("search-page");
    const templateContent = template.content.cloneNode(true);
    this.appendChild(templateContent);

    const form = this.querySelector("form");
    form.addEventListener("submit", this.handleFormSubmit);
  }

  handleFormSubmit = e => {
    e.preventDefault();

    fetch(`https://circlesapi.csesoc.app/courses/searchCourse/${this.query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        program: "3778",
        specialisations: ["COMPA1"],
        courses: {},
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      });
  };

  get query() {
    return this.querySelector("input").value;
  }
}

customElements.define("search-page", SearchPage);

const a = {
  x() {
    console.log(this);
  },
  y: () => {
    console.log(this);
  },
};

a.x();
a.y();
