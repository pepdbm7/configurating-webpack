import "../css/style.css"; //thanks to the loaders of css of Webpack we can import the file to a module
import "../css/style.scss";

console.log("Hello from Home file!");

const products = [
  "product 1",
  "product 2",
  "product 3",
  "product 4",
  "product 5"
];

let content = "";

products.forEach(p => (content += `<li>${p}</li>`));

document.getElementById("list").innerHTML = content;
