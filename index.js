// no longer has DOM node 'main#main'

let element = document.querySelector("main#main");
element.remove();

// has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

newHeader.innerHTML = "Anh is the champion"