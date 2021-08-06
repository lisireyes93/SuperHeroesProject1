document.addEventListener("DOMContentLoaded", () => {
const addBtn = document.querySelector("#new-hero-btn");
  const heroContainer = document.querySelector(".container");
  
const API_URL = "https://www.superheroapi.com/api.php/4282991881754482";

const formToAddHeros = document.querySelector(".add-hero-form");
const divCollection = document.getElementById("hero-collection");

formToAddHeros.addEventListener("submit", (event) => {
   console.log(event.target)
  event.preventDefault();
  superHeros(event)
})

let heros = [30, 234, 69, 106, 149, 201, 620, 332, 107, 720, 346, 659, 303, 717, 263]

heros.forEach(heros => {
  fetch(`https://superheroapi.com/api/4282991881754482/${heros}`)
    .then(resp => resp.json())
    .then(heros => {
      superHeros(heros)
    })
})

let addHero = false;

function superHeros(e) {
      const flipCard = document.createElement('div');
      const flipCardInner = document.createElement('div');
      const flipCardFront = document.createElement('div');
      const flipCardBack = document.createElement('div');
      const h2Hero = document.createElement('h2');
      const imgHero = document.createElement('img');
      const pHero = document.createElement('p');
      const heroLikeBttn = document.createElement('button');
      flipCard.className = 'flip-card';
      flipCardInner.className = 'flip-card-inner';
      flipCardFront.className = 'flip-card-front';
      flipCardBack.className = 'flip-card-back';
      pHero.className = 'like-amount';
      imgHero.className = "hero-images";
      heroLikeBttn.className = "like-btn";
      heroLikeBttn.textContent = "Like";
      flipCardBack.append(heroLikeBttn)
  if (e.target) {
    const inputHeroName = document.querySelector('.input-text');
    const inputHeroUrl = document.querySelector('.input-text-2');
    h2Hero.textContent = inputHeroName.value;
    imgHero.src = inputHeroUrl.value;

    let power = { intelligence: Math.floor((Math.random() * 100) + 1), strength: Math.floor((Math.random() * 100) + 1), Speed: Math.floor((Math.random() * 100) + 1), Durability: Math.floor((Math.random() * 100) + 1), Power: Math.floor((Math.random() * 100) + 1), Combat: Math.floor((Math.random() * 100) + 1) }
    for (const x in power) {
      const pStats = document.createElement('p')
      pStats.textContent = `${x}:${power[x]}`
      flipCardBack.append(pStats)
      console.log(`${x}:${power[x]}`)
    }
    formToAddHeros.reset();
  }
  else {
      h2Hero.textContent = e.name;
      imgHero.src = e.image.url;
      pHero.textContent = e.likes;
      heroLikeBttn.id = e.id;
      let power = e.powerstats;
      for (const x in power) {
        const pStats = document.createElement('p')
        pStats.textContent = `${x}:${power[x]}`
        flipCardBack.append(pStats)
        console.log(`${x}:${power[x]}`)
      }
  }
    flipCardFront.append(h2Hero, imgHero, pHero);
    flipCardInner.append(flipCardFront, flipCardBack);
    flipCard.append(flipCardInner);
    divCollection.append(flipCard);
    pHero.textContent = Math.floor((Math.random() * 10) + 1);
    heroLikeBttn.addEventListener('click', () => {
    const likes = parseInt(pHero.innerText) + 1;
    pHero.textContent = likes;
})
}

  addBtn.addEventListener("click", () => {
    addHero = !addHero;
    if (addHero) {
      heroContainer.style.display = "block";
    } else {
      heroContainer.style.display = "none";
    }
  });
});
  
  
  

// const flipNewCard = document.createElement('div');
  // const flipNewCardInner = document.createElement('div');
  // const flipNewCardFront = document.createElement('div');
  // const flipNewCardBack = document.createElement('div');
  
  // // const divNewCard = document.createElement('div');
  // const h2NewHero = document.createElement('h2');
  // const imgNewHero = document.createElement('img');
  // const pNewHero = document.createElement('p');
  // const heroNewLikeBttn = document.createElement('button');
  // const inputHeroName = document.querySelector('.input-text');
  // const inputHeroUrl = document.querySelector('.input-text-2');
  // flipNewCard.className = 'flip-card';
  // flipNewCardInner.className = 'flip-card-inner';
  // flipNewCardFront.className = 'flip-card-front';
  // flipNewCardBack.className = 'flip-card-back';

  // // divNewCard.className = "card";
  // pNewHero.className = 'like-amount';
  // heroNewLikeBttn.className = 'like-btn';
  // heroNewLikeBttn.textContent = 'Like';
  // h2NewHero.textContent = inputHeroName.value;
  // imgNewHero.src = inputHeroUrl.value;
  // imgNewHero.className = "hero-images";
  // flipNewCardFront.append(h2NewHero, imgNewHero, pNewHero);
  // flipNewCardBack.append(heroNewLikeBttn);
  // flipNewCardInner.append(flipNewCardFront, flipNewCardBack);
  // flipNewCard.append(flipNewCardInner); 
  // divCollection.append(flipNewCard);
  
  // pNewHero.textContent = 0;

  // heroNewLikeBttn.addEventListener('click', () => {
  //   const likes = parseInt(pNewHero.innerText) + 1;
  //   pNewHero.textContent = likes;

  // })
  // const randomNumber = Math.floor((Math.random() * 100) + 1);
  // let power = { intelligence: Math.floor((Math.random() * 100) + 1), strength: Math.floor((Math.random() * 100) + 1), Speed: Math.floor((Math.random() * 100) + 1), Durability: Math.floor((Math.random() * 100) + 1), Power: Math.floor((Math.random() * 100) + 1), Combat: Math.floor((Math.random() * 100) + 1)}
  // for (const x in power) {
  //   const pStats = document.createElement('p')
  //   pStats.textContent = `${x}:${power[x]}`
  //   flipNewCardBack.append(pStats)
  //   console.log(`${x}:${power[x]}`)
  // }
  
  // formToAddHeros.reset();


// console.log(event.target)
  // event.preventDefault();
  // const divNewCollection = document.getElementById("hero-collection");
  // const flipNewCard = document.createElement('div');
  // const flipNewCardInner = document.createElement('div');
  // const flipNewCardFront = document.createElement('div');
  // const flipNewCardBack = document.createElement('div');
  
  // const divNewCard = document.createElement('div');
  // const h2NewHero = document.createElement('h2');
  // const imgNewHero = document.createElement('img');
  // const pNewHero = document.createElement('p');
  // const heroNewLikeBttn = document.createElement('button');
  // const inputHeroName = document.querySelector('.input-text');
  // const inputHeroUrl = document.querySelector('.input-text-2');
  // flipNewCard.className = 'flip-card';
  // flipNewCardInner.className = 'flip-card-inner';
  // flipNewCardFront.className = 'flip-card-front';
  // flipNewCardBack.className = 'flip-card-back';

  // divNewCard.className = "card";
  // pNewHero.className = 'like-amount';
  // heroNewLikeBttn.className = 'like-btn';
  // heroNewLikeBttn.textContent = 'Like';
  // h2NewHero.textContent = inputHeroName.value;
  // imgNewHero.src = inputHeroUrl.value;
  // imgNewHero.className = "hero-images";
  // flipNewCardFront.append(h2NewHero, imgNewHero, pNewHero);
  // flipNewCardBack.append(heroNewLikeBttn);
  // flipNewCardInner.append(flipNewCardFront, flipNewCardBack);
  // flipNewCard.append(flipNewCardInner); 
  // divNewCollection.append(flipNewCard);
  
  // pNewHero.textContent = 0;

  // heroNewLikeBttn.addEventListener('click', () => {
  //   const likes = parseInt(pNewHero.innerText) + 1;
  //   pNewHero.textContent = likes;
  


  // ==========================================================

      // const flipCard = document.createElement('div');
      // const flipCardInner = document.createElement('div');
      // const flipCardFront = document.createElement('div');
      // const flipCardBack = document.createElement('div');
      // const h2Hero = document.createElement('h2');
      // const imgHero = document.createElement('img');
      // const pHero = document.createElement('p');
      // const heroLikeBttn = document.createElement('button');

      // flipCard.className = 'flip-card';
      // flipCardInner.className = 'flip-card-inner';
      // flipCardFront.className = 'flip-card-front';
      // flipCardBack.className = 'flip-card-back';
      // pHero.className = 'like-amount';
      // imgHero.className = "hero-images";
      // heroLikeBttn.className = "like-btn";

      // flipCardBack.append(heroLikeBttn);

      // h2Hero.textContent = heros.name;
      // imgHero.src = heros.image.url;
      // pHero.textContent = heros.likes;
      // heroLikeBttn.id = heros.id;
      // heroLikeBttn.textContent = "Like";

      // let power = heros.powerstats;
      // for (const x in power) {
      //   const pStats = document.createElement('p')
      //   pStats.textContent = `${x}:${power[x]}`
      //   flipCardBack.append(pStats)
      //   console.log(`${x}:${power[x]}`)
      // }

      // flipCardFront.append(h2Hero, imgHero, pHero);
      // flipCardInner.append(flipCardFront, flipCardBack);
      // flipCard.append(flipCardInner);
      // divCollection.append(flipCard);

      // pHero.textContent = 0;

      // heroLikeBttn.addEventListener('click', () => {
      //   const likes = parseInt(pHero.innerText) + 1;
      //   pHero.textContent = likes;
      // })



