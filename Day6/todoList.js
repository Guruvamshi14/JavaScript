const input = document.querySelector('input');
const submit = document.querySelector('button');
const ul = document.getElementsByClassName('ul')[0];

let id = 0;

function addTask() {

    const data = input.value;

    if (data.length <= 0) return

    const ptag = document.createElement('p');

    ptag.dataset.id = id
    ptag.classList.add('ptg')

    ptag.innerHTML = `
        <span>${data} </span>
        <button data-action='edit'> Edit </button>
        <button data-action='delete'> Delete </button>
    `
    console.log(ptag);
    ul.appendChild(ptag);
    input.value = '';
}

submit.addEventListener('click', (e)=> {
    addTask()
})

// document.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(e.target.id);
//     console.log(e.target.classList[0]);
//     console.log(e.target.dataset.btn)
// })

document.addEventListener('click',(e) => {

    // console.log(e);

    if(e.target.dataset.action === 'edit') {

        console.log(e.target);
        // const pTag = e.target.closest('p');
        const pTag = e.target.parentElement;
        const data = pTag.querySelector('span').textContent;
        console.log(data);
        input.value = data
        console.log(input.value);
        ul.removeChild(pTag);
        // addTask();
    }

});