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
    form.addEventListener("submit", this.handleSearch);
  }

  handleSearch = e => {
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
        this.renderSearchResults(data);
      });
  };

  renderSearchResults = courses => {
    const list = this.querySelector("ul");
    clearElem(list);
    Object.entries(courses).forEach(([courseCode, courseName]) => {
      this.addSearchResult(courseCode, courseName);
    });
  };

  addSearchResult = (courseCode, courseName) => {
    const list = this.querySelector("ul");
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = `${courseCode}: ${courseName}`;

    link.addEventListener("click", () => {
      clearElem(root);
      const coursePage = document.createElement("course-page");
      coursePage.setAttribute("course-code", courseCode);
      root.appendChild(coursePage);
    });

    li.appendChild(link);
    list.appendChild(li);
  };

  get query() {
    return this.querySelector("input").value;
  }
}

class CoursePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("course-page");
    const templateContent = template.content.cloneNode(true);
    this.appendChild(templateContent);

    this.querySelector("a").addEventListener("click", () => {
      clearElem(root);
      const searchPage = document.createElement("search-page");
      root.appendChild(searchPage);
    });

    const courseCode = this.getAttribute("course-code");
    fetch(`https://circlesapi.csesoc.app/courses/getCourse/${courseCode}`)
      .then(resp => resp.json())
      .then(data => {
        this.querySelector('slot[name="course-name"]').textContent = `${data.code}: ${data.title}`;
        this.querySelector('slot[name="description"]').textContent = data.description;
        this.querySelector('slot[name="requirements"]').textContent = data.raw_requirements;
      });
  }
}

customElements.define("search-page", SearchPage);
customElements.define("course-page", CoursePage);
