const countriesAPI = 'https://restcountries.com/v2/all'

const countriesArr = []

async function fetchData() {

    const response = await fetch(countriesAPI);
    data = await response.json();

    console.log(data);
    localStorage.setItem('Countries',JSON.stringify(data));

 
}

// console.log(localStorage.getItem('Countries'));

if (localStorage.getItem('Countries') == null) {
    console.log("Hai");
    fetchData();
}


let data = localStorage.getItem('Countries');
// console.log(typeof data);
data = JSON.parse(data);
// console.log(data);
for (let val of data) {
    countriesArr.push(val.name);
}

// console.log(countriesArr)

let flag = true

async function processData() {

    // await fetchData();
    

    const inp = document.getElementById('input')
    const search = document.getElementById('search')
    const st = document.getElementById('st')
    const sany = document.getElementById('sany')
    const sort = document.getElementById('sort')
    const Countries = document.getElementById('countries');

    for (let val of countriesArr) {
        const pTag = document.createElement('p');
        pTag.innerHTML = val
        Countries.appendChild(pTag);
    }

    let newArray = [];

    sany.addEventListener('click',()=> {
        flag = true
    })

    st.addEventListener('click',()=> {
        flag = false
    });

    search.addEventListener('click', () => {
        newArray = countriesArr.filter((ele) => {

            let tar = inp.value;
            console.log(typeof tar);
            ele = ele.toLowerCase();
            console.log(tar);
            if (flag) {
                return ele.includes(tar)
            } else {
                return ele.startsWith(tar);
            }
            
        });
        console.log(flag);
        console.log(newArray);
        updateCoumtries(newArray);

    });




}

processData();

function updateCoumtries(countriesArr) {

    // console.log(countriesArr);
    const Countries = document.getElementById('countries');
    Countries.innerHTML = " ";
    for (let val of countriesArr) {
        // console.log(val);
        const pTag = document.createElement('p');
        pTag.innerHTML = val
        Countries.appendChild(pTag);
    }
}