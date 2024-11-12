import "./CSS/style.css";
import { pokemonStarters } from "./pokemon.js";
const DOMSelectors = {
  btn: document.querySelector(".bruh"),
  container: document.querySelector(".container"),
  form: document.querySelector(".form"),
  dropdown: document.querySelector(".types"),
};

function addcards(array) {
  array.forEach((item) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `
      <div class = "card" id = "${item.types[0]}${item.stage}">
        <h1 class = "card-head">${item.name}</h1>
        <h2 class = "card-type">${item.types}</h2>
        <img src = "${item.image}" class = "card-image" alt = "${item.name}"
        <p class = "desc">${item.altText}</p>
        <h3 class = "gen">Generation: ${item.generation}</h3>
        <h3 class = "stage"> Stage: ${item.stage}</h3>
      </div>`
    )
  );
}

addcards(pokemonStarters);

DOMSelectors.form.addEventListener("submit", function (event) {
  let selectedtypes = DOMSelectors.dropdown.value;
  let currentclass = document.body.classList.value;
  event.preventDefault();
  if (selectedtypes === "fire") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("fuego");
  } else if (selectedtypes === "water") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("aqua");
    //if ti was previouisly water, it deletes water thats hwy it goes white
  } else if (selectedtypes === "grass") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("leaf");
  }
});

// DOMSelectors.btn.addEventListener("click", function () {
//   if (document.body.classList.contains("basic")) {
//     document.body.classList.add("water");
//     document.body.classList.remove("basic");
//     DOMSelectors.btn.innerHTML = "Make this website TERRIBLE again";
//   } else {
//     document.body.classList.add("basic");
//     document.body.classList.remove("water");
//     DOMSelectors.btn.innerHTML = "Make this website GREAT again";
//   }
// });
