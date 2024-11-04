import "../CSS/style.css";
const DOMSelectors = {
  btn: document.querySelector(".change"),
};

DOMSelectors.btn.addEventListener("click", function () {
  if (document.body.classList.contains("basic")) {
    document.body.classList.add("water");
    document.body.classList.remove("basic");
    DOMSelectors.btn.innerHTML = "Make this website TERRIBLE again";
  } else {
    document.body.classList.add("basic");
    document.body.classList.remove("water");
    DOMSelectors.btn.innerHTML = "Make this website GREAT again";
  }
});
