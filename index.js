// Write your code here!
let element = document.createElement('div')

document.body.appendChild(element) 

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)

let element1 = document.querySelector("p#greeting");
element1.innerHTML = 'Hello, DOM!'

element.style.backgroundColor = '#27627B'

element.style.textAlign = 'center';

let header = document.getElementById("header");
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


ul.style.textAlign = 'left'