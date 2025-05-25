document.querySelector('#parent').addEventListener('click', (e) => {
    console.log("Clicked");
    console.log(e);
    console.log(e.target.tagName);
    console.log(e.target.innerText);
    console.log(typeof e.target.dataset.firstname);

    // if (e.target.datafirstname != undefined) {
    //     console.log(`First Name is ${e.target.innerText}`);
    // }

})