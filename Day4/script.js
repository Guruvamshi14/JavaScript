// const allTitlesByTag = document.getElementsByTagName('h1')

// const titlesByClassName = document.getElementsByClassName('title');

// console.log(titlesByClassName);

// const titleById = document.getElementById('first-title');

// console.log(titleById);

// let firstTitle = document.querySelector('h1');
// console.log(firstTitle);
// firstTitle = document.querySelector('#first-title');
// console.log(firstTitle);
// firstTitle = document.querySelector('.title');
// console.log(firstTitle);

// const titles = document.querySelectorAll('h1');
// titles[3].className = 'title';
// titles[3].id = 'fourth-title';

// titles[3].classList.add('title','header-title')

// titles[3].innerHTML = `<h1>Fourth Title</h1>`

const lists = `
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul')
ul.innerHTML = lists;

console.log(ul);

const wrapper = document.querySelector('div');

wrapper.style.marginLeft = '200px';
wrapper.style.marginTop = '100px';


const li = document.querySelectorAll("li");

n = li.length

console.log(li);

for(let i = 0; i < n; i++) {
    if(i%2 == 0) {
        li[i].style.color = 'blue'
        li[i].style.fontSize = '25px';
    } else {
        li[i].style.color = 'green'
        li[i].style.fontSize = '30px';
    }
}

const span = document.querySelector('span');

const arr = ['black','green','blue','red','pink']

let idx = 0

span.style.color = arr[idx]

setInterval(()=>{
    idx++;
    idx = idx%arr.length;
    span.style.color = arr[idx]
},100);

const newTitle = document.createElement('p');
newTitle.innerHTML = `My name is Guru Vamshi`

wrapper.appendChild(newTitle);

// for(const list of li) {
//     ul.removeChild(list);
// }