// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const titleElements = document.querySelectorAll(".title");
titleElements.forEach(function (titleElement) {
  titleElement.addEventListener("click", toggle);
});

async function getTitle() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const accordion = document.querySelector(".accordion");

  data.forEach((title) => {
    const titleEl = document.createElement("div");
    titleEl.classList.add("title");
    titleEl.textContent = title.title;
    accordion.appendChild(titleEl);

    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("description");
    descriptionEl.textContent = title.body;
    accordion.appendChild(descriptionEl);

    titleEl.addEventListener("click", function () {
      titleEl.classList.toggle("active");

      descriptionEl.style.display = titleEl.classList.contains("active")
        ? "block"
        : "none";
    });
  });
}

getTitle();
