const results = document.getElementById("results")

function clearResults(){
results.innerHTML=""
}

async function fetchCountries(){

clearResults()

const region = document.getElementById("regionSelect").value

try{

const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)

if(!response.ok){
throw new Error("Failed to fetch countries")
}

const data = await response.json()

data.forEach(country =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${country.flags.png}">
<h3>${country.name.common}</h3>
<p>Population: ${country.population}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>Error loading countries</p>"

}

}

async function fetchUsers(){

clearResults()

try{

const response = await fetch("https://jsonplaceholder.typicode.com/users")

if(!response.ok){
throw new Error("Failed to fetch users")
}

const users = await response.json()

users.forEach(user =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<h3>${user.name}</h3>
<p>Email: ${user.email}</p>
<p>City: ${user.address.city}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>Error loading users</p>"

}

}

async function fetchCharacters(){

clearResults()

const name = document.getElementById("characterInput").value

try{

const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)

if(!response.ok){
throw new Error("Character not found")
}

const data = await response.json()

data.results.forEach(character =>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${character.image}">
<h3>${character.name}</h3>
<p>Status: ${character.status}</p>

`

results.appendChild(card)

})

}

catch(error){

console.error(error)

results.innerHTML="<p>Error loading characters</p>"

}

}

document.getElementById("countriesBtn").addEventListener("click", fetchCountries)

document.getElementById("usersBtn").addEventListener("click", fetchUsers)

document.getElementById("rickBtn").addEventListener("click", fetchCharacters)