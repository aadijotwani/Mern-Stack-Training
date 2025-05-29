let container = document.getElementById("container");
let toremove = document.getElementById("removeMe");
//create a new element <p>
let newparagraph = document.createElement("p");
newparagraph.innerText = "This is a new paragragraph";
//add the new <p> ot the container
container.appendChild(newparagraph);

toremove.remove();
