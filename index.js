console.log(":)")

//const heros = []

const API_URL = "https://www.superheroapi.com/api.php/4282991881754482"

const heroContainer = document.querySelector(".container")
  console.log(heroContainer)
  
const formToAddHeros = document.querySelector(".add-hero-form")
    console.log(formToAddHeros)


formToAddHeros.addEventListener("submit", (event)=> {
    console.log(event.target)
    event.preventDefault()



 })


let heros = [30, 234, 69, 106, 149, 201, 620, 332, 107, 720, 346, 659, 303, 717, 263]

heros.forEach(heros => {
    fetch(`https://superheroapi.com/api/4282991881754482/${heros}`)
      .then(resp => resp.json())
      .then(heros => {
        console.log(heros)

const divCard = document.createElement('div')
const h2Hero = document.createElement('h2')
const imgHero = document.createElement('img')
const pHero = document.createElement('p')
const heroLikeBttn = document.createElement('button')
const heroDisLikeBttn = document.createElement('button')
const divCollection = document.getElementById("hero-collection")
console.log(divCollection)
divCard.className = "card"
h2Hero.textContent = heros.name
imgHero.src = heros.image.url
console.log(imgHero)
imgHero.className = "hero-images"
pHero.textContent = heros.likes
heroLikeBttn.className = "like-btn"
heroLikeBttn.id = heros.id
heroLikeBttn.textContent = "Like"
heroDisLikeBttn.className = "dislike-btn"
heroDisLikeBttn.id = heros.id
heroDisLikeBttn.textContent = "Dislike"

divCard.append(h2Hero, imgHero, pHero, heroLikeBttn, heroDisLikeBttn)

divCollection.append(divCard)


      })
      })


let addHero = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-hero-btn");
  const heroFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addHero = !addHero;
    if (addHero) {
      heroFormContainer.style.display = "block";
    } else {
      heroFormContainer.style.display = "none";
    }
  });
});











//const randomThingsZone = document.querySelector()
//const fetchARandomThing= ()=> {


//}


//fetch()
//.then((r)=> r.json())
//.then((heros) => {console.log(heros)


//database.push(heros)
    //console.log(database)


//})


//for(i=0; i< 20; i++){

//}





//const init = ()=>{
    //console.log("WE LITTY")

    //const changeTheH1 = document.querySelector("h1")
       // changeTheH1.textContent = "WE ARE LITTYY"
       //console.log(changeTheH1)
    
       // const changeLoadingImage = document.querySelector("img")
       // console.log(changeLoadingImage)

//}
//document.addEventListener("DOMContentLoaded", (event)=> {init()})



