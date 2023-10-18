// get the data that is put in to the search box

let form = document.querySelector("form");
let searchInput = form.querySelector("form input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  console.log(searchInput.value);
  getApiDetails(searchInput.value)
});

// fetch data after clicking on search
// 

const getApiDetails = async (search) =>{
try {
    const config = {params: {title: search}}
    const res = await axios.get(`https://api.publicapis.org/entries`, config)
    console.log(res.data.entries);
    let entries = res.data.entries
    renderData(entries)
} catch (error) {
    console.log("ERROR: " + error);
}

}

// need to take out the "API name, description, link and category and display the results
const renderData = (data) =>{
    for (const item of data) {
        let APIName = item.API
        console.log(APIName);
// createCard
    }
}

let card = (name, category, description, link) => {
 const card = document.createElement('div')
 card.className = "card"
 const inner = document.createElement('div')
 inner.className = "card-body"
 card.appendChild(inner)
 const h5 = document.createElement('h5')
 h5.className = "card-title"
 h5.innerHTML = name
inner.append(h5)


//  const h6 = document.createElement('h6')
//  const p = document.createElement('p')
//  const a = document.createElement('href')
    


}
const h5 = document.createElement('h5')
h5.className = "card-title"
h5.innerHTML = "TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"

document.body.append(h5)



// https://api.publicapis.org/entries?title=cat
