const container = document.querySelector('div');

for(let i = 0; i < 101; i++) {

    let child = document.createElement('p');
    child.style.height = '50px'
    child.style.width = '50px'
    child.style.border = '2px solid blue'
    child.style.margin = 0
    container.appendChild(child);
    child.innerHTML = `${i}`;
    child.style.fontSize = '30px'
    child.style.textAlign = 'center'
    
    

}