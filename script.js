const results = document.getElementById("results")

function clearResults(){
results.innerHTML=""
}

async function fetchCountries(){

clearResults()

results.innerHTML = "<p>Loading countries...</p>"

const region = document.getElementById("regionSelect").value

try{

const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)

if(!response.ok){
throw new Error("Failed to fetch countries")
}

const data = await response.json()

clearResults()

data.forEach(country =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${country.flags.png}" alt="Flag of ${country.name.common}">
<h3>${country.name.common}</h3>
<p>Population: ${country.population.toLocaleString()}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>⚠️ Error loading countries. Please try again.</p>"

}

}

async function fetchUsers(){

clearResults()

results.innerHTML = "<p>Loading users...</p>"

try{

const response = await fetch("https://jsonplaceholder.typicode.com/users")

if(!response.ok){
throw new Error("Failed to fetch users")
}

const users = await response.json()

clearResults()

users.forEach(user =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<h3>${user.name}</h3>
<p><strong>Email:</strong> ${user.email}</p>
<p><strong>City:</strong> ${user.address.city}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>⚠️ Error loading users. Please try again.</p>"

}

}

async function fetchCharacters(){

clearResults()

results.innerHTML = "<p>Loading characters...</p>"

const name = document.getElementById("characterInput").value

try{

const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)

if(!response.ok){
throw new Error("Character not found")
}

const data = await response.json()

clearResults()

data.results.forEach(character =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${character.image}" alt="${character.name}">
<h3>${character.name}</h3>
<p>Status: ${character.status}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>⚠️ Character not found. Try another name.</p>"

}

}

document.getElementById("countriesBtn").addEventListener("click", fetchCountries)
document.getElementById("usersBtn").addEventListener("click", fetchUsers)
document.getElementById("rickBtn").addEventListener("click", fetchCharacters)