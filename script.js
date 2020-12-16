function pageLoad() {

let myObjects = [
  {
    tag: "h1",
    content: "Teréz"
  },
  {
    tag: "p",
    content: "Front-end developer"
  }
];



/*
for (let i = 0; i < myObjects.length; i++) {
 
}
*/
const root = document.getElementById("root");

for(o of myObjects) {
  //console.log(myObject.tag);
  root.insertAdjacentHTML("beforeend", `
    <${o.tag}>${o.content}</${o.tag}>
  `);
}

root.addEventListener("click", function () {
  root.classList.toggle("clicked");
});

/*for (myObject of myObjects) {
  let newElem = document.createElement(myObject.tag);
  newElem.innerText = myObject.content;
  objectPlace.appendChild(newElem);
}*/
}

window.addEventListener("load", pageLoad);