const button = document.querySelector("#button");
const mini = document.querySelector("#mini");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
button.addEventListener("click", buttonHandler);
function buttonHandler(e) {
  e.preventDefault();
  mini.classList.toggle("open");
  button.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderMini();
}
function renderMini() {
  mini.appendChild(menu);
}

const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
}); 

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}