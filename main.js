
var name = prompt("Введите ваше имя:");


var outputElement = document.getElementById("output");

var nameElement = document.createElement("div");
nameElement.textContent = name;

nameElement.classList.add("nameStyle");

outputElement.appendChild(nameElement);
