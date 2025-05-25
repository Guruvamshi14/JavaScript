
// const select = document.querySelector('select');
// const option = document.querySelector('option');

// const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune"
// ];


// select.addEventListener('chan', (e) => {
//     select.removeChild(option);
//     console.log("Clicked");
//     for (let i = 1; i < 9; i++) {
//         const opTag = document.createElement('option');
//         opTag.innerHTML = planets[i];
//         select.appendChild(opTag);
//     }
// });

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];


const select = document.querySelector('select');
const mass = document.querySelector('input');
const img = document.querySelector('img');

const button = document.querySelector('button');


mass.addEventListener('input',(e) => {
    console.log(e);
    console.log(e.target.value);
})


// Run this on page load to add options
planets.forEach(planet => {
    const opTag = document.createElement('option');
    opTag.innerHTML = planet;
    select.appendChild(opTag);
});

// Use "change" instead of "click"
select.addEventListener('change', (e) => {    
    let resPlanet = e.target.value;
    img.src = `./images/${resPlanet}.png`
    img.alt = resPlanet
});

button.addEventListener('click' ,(e) => {
    let str = mass.value
    let pattern = /\D/gi
    let res = pattern.test(str);
    if(res) {
        const pTag = document.createElement('p');
        console.log(pTag);
        pTag.innerHTML = "ENter Number"
        // document.querySelector('main').removeChild(document.querySelector('div'));
        document.querySelector('main').innerHTML = "ENter a number"
    } else {
        console.log("haibfa");
    }
});
