// Write your code here
// no longer has DOM node 'main#main'
main.remove()

// has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement('h1');
newHeader.id = 'victory';

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = 'K is the champion'
