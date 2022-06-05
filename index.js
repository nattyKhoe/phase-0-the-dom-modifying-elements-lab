const main = document.getElementById("main");
document.body.removeChild(main);

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.setAttribute ("id", "victory");
newHeader.textContent ="Natasha is the champion";
