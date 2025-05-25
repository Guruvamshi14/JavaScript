const populationBtn = document.getElementById('pop');
const languageBtn = document.getElementById('lan');
const heading = document.getElementById('heading');
const countriesAPI = 'https://restcountries.com/v2/all'

let populationData = []
let languageData = []
let sumOfpoulation = 0

async function fetchData() {

    const response = await fetch(countriesAPI);
    const data = await response.json();

    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        populationData.push([obj.population,obj.name]);
        sumOfpoulation += obj.population
        let language = obj.languages
        for (let j = 0; j < language.length; j++) {
            languageData.push(language[j].name)
        }
    }

    const lanData = languageData.
                reduce((acc, ele) => {
                    // console.log(ele);
                acc[ele] = (acc[ele] || 0) + 1
                return acc
                },{});
    
    languageData = Object.entries(lanData)
   

    languageData.sort((a, b) => b[1] - a[1]);
    languageData = languageData.slice(0,10);
    populationData.sort((a, b) => b[0] - a[0]);
    populationData = populationData.slice(0,10);

    console.log(populationData);
    console.log(languageData);


}

async function processData() {
    await fetchData(); // Wait 

    const languageTag = document.getElementById('language');
    const populationTag = document.getElementById('population');

    // languages
    for (i = 0; i < 10; i++) {

        const languageTagChild = document.createElement('p');

        const lan = document.createElement('p');
        lan.innerHTML = languageData[i][0]
        // console.log(languageData[i][0])

        const bar = document.createElement('p');
        
        const val = document.createElement('p');

        languageTagChild.appendChild(lan);
        languageTagChild.appendChild(bar);
        languageTagChild.appendChild(val);

        let l = languageData[i][1];
        val.innerHTML = l;

        lan.style.width = '10%'
        bar.style.width = `${87*(l/100)}%`
        val.style.width = '3%'

        // lan.style.border = '2px solid black'

        bar.style.height = '20px'
        bar.style.background = 'pink'

        languageTagChild.style.display = 'flex'
        languageTagChild.style.flexDirection = 'colomn'
        languageTagChild.style.gap = '30px'
        // languageTagChild.style.border = '2px solid black'
        languageTagChild.style.justifyContent = 'flex-start'


        languageTag.appendChild(languageTagChild);
        languageTagChild.style.margin = '10px'
    }


}

processData();
