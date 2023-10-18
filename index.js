// get the data that is put in to the seach box 

let form = document.querySelector('form');
let searchInput = form.querySelector('form input');

form.addEventListener('submit', (e) => {
    console.log(searchInput.value);
    e.preventDefault();
})

// fetch data after clicking on search
// display the results  


// https://api.publicapis.org/entries?title=cat