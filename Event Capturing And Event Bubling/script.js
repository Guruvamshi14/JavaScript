document.getElementById('grand-parent').addEventListener('click', () => {
    console.log("Grand - Parent");
});
document.getElementById('parent').addEventListener('click', (e) => {
    console.log("Parent");
    e.stopPropagation();
})
document.getElementById('child').addEventListener('click', () => {
    console.log("Child");
})

// Event Capturing and Event Bubuling 

// true represents the event Capturing => Grand-Parent - Parent - Child
// Event Bubbling means => child parent Grand - Parent 
