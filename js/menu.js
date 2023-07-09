// Add active no item selecionado
const lista = document.querySelectorAll('.list_me');

function activeLink() {
  lista.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
}
lista.forEach((item) =>
item.addEventListener('click', activeLink));

// Troca de displays
const display1 = document.getElementById('c1');
const display2 = document.getElementById('c2');
const display3 = document.getElementById('c3');

display2.classList.add("hide");
display3.classList.add("hide");

lista[0].addEventListener("click", () => {
  display1.classList.remove("hide");
  display1.classList.add("conteudo");
  display2.classList.add("hide");
  display3.classList.add("hide");
});
lista[1].addEventListener("click", () => {
  display1.classList.add("hide");
  display2.classList.remove("hide");
  display2.classList.add("conteudo");
  display3.classList.add("hide");
});
lista[2].addEventListener("click", () => {
  display1.classList.add("hide");
  display2.classList.add("hide");
  display3.classList.remove("hide");
  display3.classList.add("conteudo");
});

// Javascrypt para fazer a barra de navigação horizontal
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  //console.log("1.", scrollLeftValue);
  let scrollabreWidht = tabMenu.scrollWidth - tabMenu.clientWidth;
  //console.log("2.", scrollabreWidht);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  btnRight.style.display = scrollabreWidht > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener ("click", () => {
  tabMenu.scrollLeft += 400;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

btnLeft.addEventListener ("click", () => {
  tabMenu.scrollLeft -= 400;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

window.onload = function() {
  btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function() {
  btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(tabMenu.scrollLeft);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

// JavaScrript para fazer a barra de vavegação draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
  if(!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  IconVisibility();
  tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
  activeDrag = false;
  tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
  activeDrag = true;
});
