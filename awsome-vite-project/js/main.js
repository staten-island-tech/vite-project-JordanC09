import "../CSS/style.css";
import { pokemonStarters } from "./pokemon.js";
const DOMSelectors = {
  btn: document.querySelector(".bruh"),
  container: document.querySelector(".container"),
  form: document.querySelector(".form"),

  typedropdown: document.querySelector(".types"),
  gendropdown: document.querySelector(".gen"),
  stagedropdown: document.querySelector(".stg"),

  card: document.querySelectorAll(".card"),
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

function sort(array, sortbytypes, type, sortbygen, gen, sortbystage, step) {
  DOMSelectors.container.innerHTML = "";

  if (sortbytypes === "All") {
    if (sortbygen === "All") {
      if (sortbystage === "All") {
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
      } else if (sortbystage === "yes") {
        array.forEach((item) => {
          if (item.stage.includes(step)) {
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
            );
          }
        });
      }
    } else if (sortbygen === "yes") {
      if (sortbystage === "All") {
        array.forEach((item) => {
          if (item.generation.includes(gen)) {
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
            );
          }
        });
      } else if (sortbystage === "yes") {
        array.forEach((item) => {
          if (item.generation.includes(gen) && item.stage.includes(step)) {
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
            );
          }
        });
      }
    }
  } else if (sortbytypes === "yes") {
    if (sortbygen === "All") {
      if (sortbystage === "All") {
        array.forEach((item) => {
          if (item.types.includes(type)) {
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
            );
          }
        });
      } else if (sortbystage === "yes") {
        array.forEach((item) => {
          if (item.types.includes(type) && item.stage.includes(step)) {
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
            );
          }
        });
      }
    } else if (sortbygen === "yes") {
      if (sortbystage === "All") {
        array.forEach((item) => {
          if (item.types.includes(type) && item.generation.includes(gen)) {
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
            );
          }
        });
      } else if (sortbystage === "yes") {
        array.forEach((item) => {
          if (
            item.types.includes(type) &&
            item.generation.includes(gen) &&
            item.stage.includes(step)
          ) {
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
            );
          }
        });
      }
    }
  }

  // array.forEach((item) => {
  //   if (sortby === "types"){
  //     if (catagory === "All"){
  //       DOMSelectors.container.insertAdjacentHTML(
  //         "beforeEnd",
  //         `
  //         <div class = "card" id = "${item.types[0]}${item.stage}">
  //           <h1 class = "card-head">${item.name}</h1>
  //           <h2 class = "card-type">${item.types}</h2>
  //           <img src = "${item.image}" class = "card-image" alt = "${item.name}"
  //           <p class = "desc">${item.altText}</p>
  //           <h3 class = "gen">Generation: ${item.generation}</h3>
  //           <h3 class = "stage"> Stage: ${item.stage}</h3>
  //         </div>`
  //       )
  //     }
  //     else if (item.types.includes(catagory)){
  //       DOMSelectors.container.insertAdjacentHTML(
  //         "beforeEnd",
  //         `
  //         <div class = "card" id = "${item.types[0]}${item.stage}">
  //           <h1 class = "card-head">${item.name}</h1>
  //           <h2 class = "card-type">${item.types}</h2>
  //           <img src = "${item.image}" class = "card-image" alt = "${item.name}"
  //           <p class = "desc">${item.altText}</p>
  //           <h3 class = "gen">Generation: ${item.generation}</h3>
  //           <h3 class = "stage"> Stage: ${item.stage}</h3>
  //         </div>`
  //       )
  //     }
  //   }
  // }
  // )
}

addcards(pokemonStarters);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let selectedtypes = DOMSelectors.typedropdown.value;
  let selectedgen = DOMSelectors.gendropdown.value;
  let selectedstage = DOMSelectors.stagedropdown.value;

  let currentclass = document.body.classList.value;

  if (selectedtypes === "Fire") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("fuego");

    // sort(pokemonStarters, "types", "Fire");
  } else if (selectedtypes === "Water") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("aqua");
    //if ti was previouisly water, it deletes water thats hwy it goes white

    // sort(pokemonStarters, "types", "Water");
  } else if (selectedtypes === "Grass") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("leaf");

    // sort(pokemonStarters, "types", "Grass");
  } else if (selectedtypes === "All") {
    document.body.classList.remove(currentclass);
    document.body.classList.add("basic");

    // sort(pokemonStarters, "types", "All");
  }

  let sortedtypes, sortbygen, sortbystage;

  if (selectedtypes === "All") {
    sortedtypes = "All";
  } else {
    sortedtypes = "yes";
  }

  if (selectedgen === "All") {
    sortbygen = "All";
  } else {
    sortbygen = "yes";
  }

  if (selectedstage === "All") {
    sortbystage = "All";
  } else {
    sortbystage = "yes";
  }

  sort(
    pokemonStarters,
    sortedtypes,
    selectedtypes,
    sortbygen,
    selectedgen,
    sortbystage,
    selectedstage
  );
});

//take in all the information: type, gen, and stage
// remove all cards and add back based on info given above
// if type = a and gen = b and stage = c
// but if nothing is specified for a catagory, type = all
// if type !== all -> if
