

const content = document.querySelector(".content");
console.log(content);

let arr = ["a", "ass", "aaaaa" , 'abd' ,'abb' , 'abbbd', 'abbbbbd']

function updateValues() {

    for (const ele of this) {

    const child = document.createElement('p');
    child.innerHTML = ele;
    content.append(child);

    }

    console.log(this);

}

updateValues.apply(arr);


function debounce(func, delay) {

    let timeoutId;
    return function(...args) {

        clearTimeout(timeoutId);
        timeoutId = setTimeout (() => {
            func.apply(this,args);
        }, delay);

    }
}

const debouncedSearch = debounce(search, 1000);



function search (e) {
    const val = e.target.value;
    console.log(val);

    let arr1 = arr.filter((ele) => {
        return ele.startsWith(val);
    })

    content.innerHTML = '';
    updateValues.call(arr1);
}

document.querySelector("input").addEventListener('input', (e) => {
    debouncedSearch(e);
});