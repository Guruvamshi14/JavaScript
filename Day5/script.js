const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', (e) => {
    // console.log('e gives use Event Listener ', e)
    // console.log('e.targget gives the selected Element',e.target)
    let val = mass.value;
    document.querySelector('p').innerHTML = val;
})

// button.addEventListener('dblclick', (e) => {
//     console.log('e gives use Event Listener ', e)
//     console.log('e.targget gives the selected Element',e.target)
// })

// button.addEventListener('mouseenter',(e) => {
//     console.log("Entered In to Button")
//     // console.log(e);
// })

