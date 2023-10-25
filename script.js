document.addEventListener('DOMContentLoaded', function() {
  let scoreCount = parseInt(localStorage.getItem("score")) || 0;
  let clickPower = 1;

  // Reference to DOM elements
  let score = document.getElementById("score");
  let clickerButton = document.getElementById("counter");

  function refreshCookieScore() {
      score.innerHTML = `Score : ${scoreCount}`;
  }

  clickerButton.addEventListener('click', function(event) {
      event.preventDefault();
      scoreCount += clickPower;
      refreshCookieScore();
      localStorage.setItem("score", scoreCount);
  });
    /********************************
  
            TogglePokeCoins
  
  ********************************/
  // Attaching the same click event to multiple elements
  ['pichu', 'pikachu', 'Raichu'].forEach(id => {
      document.getElementById(id).addEventListener('click', function(event) {
          togglePokeCoin(event);
          // Suppose clicking these elements also affects the score.
          scoreCount += clickPower; // Or some other calculation based on the clicked element
          refreshCookieScore(); // Update the score display
      });
  });

  function togglePokeCoin(event) {
      let pokeCoin = document.getElementById('pokecoin');
      let gameInterface = document.getElementById('gameplay-interface');

      let clickX = event.clientX;
      let clickY = event.clientY;

      let rect = gameInterface.getBoundingClientRect();

      let relativeX = clickX - rect.left;
      let relativeY = clickY - rect.top;

      pokeCoin.style.left = relativeX + 'px';
      pokeCoin.style.top = relativeY + 'px';

      pokeCoin.classList.remove('hidden');
      pokeCoin.style.animation = 'jump 1s ease';

      setTimeout(() => {
          pokeCoin.classList.add('hidden');
          pokeCoin.style.removeProperty('animation');
      }, 1000);
  }

  // Initial score refresh
  refreshCookieScore();

  /********************************
  
            Pokeball
  
  ********************************/

  const pokeballElement = document.getElementById('pokeball');
    const gameplayWrapper = document.getElementById('gameplay-wrapper');
    let animationFrameId = null;
    // let clickPower = 1; // Assurez-vous d'initialiser clickPower en fonction de la logique de votre jeu.

    function movePokeball() {
      const topPosition = parseInt(pokeballElement.style.top) || 0;
      pokeballElement.style.top = (topPosition + 1) + 'px';

      const rect = gameplayWrapper.getBoundingClientRect();

      // Si la pokeball atteint le bas ou est cliquée, on arrête l'animation
      if (topPosition > (rect.bottom - rect.top) - pokeballElement.offsetHeight || pokeballElement.style.display === 'none') {
          cancelAnimationFrame(animationFrameId);
          pokeballElement.style.display = 'none';
          schedulePokeball();
      } else {
          animationFrameId = requestAnimationFrame(movePokeball);
      }
    }
    // Spawn de la Pokeball
    function spawnPokeball() {
        const rect = gameplayWrapper.getBoundingClientRect();
        const randomX = Math.floor(Math.random() * (rect.width - pokeballElement.clientWidth));

        pokeballElement.style.left = randomX + 'px';
        pokeballElement.style.top = '0px'; // Le point de départ est le haut de la div du gameplay
        pokeballElement.style.display = 'block';

        movePokeball();
    }

    // Durée entre les spawns
    function schedulePokeball() {
        const randomInterval = Math.random() * (1800 - 1200) + 1200; // 2-3 minutes
        setTimeout(spawnPokeball, randomInterval);
    }
    // On click sur la Pokeball
    pokeballElement.addEventListener('click', function() {
        pokeballElement.style.display = 'none';
        scoreCount += Math.floor(Math.random()*100);
        refreshCookieScore();
    });

    // Initialiser les positions pour éviter les erreurs de calcul
    pokeballElement.style.top = '0px';
    pokeballElement.style.left = '0px';

    schedulePokeball(); 
  
  /********************************
  
            Attaque
  
  ********************************/
  
  /********************************
            Charge
  ********************************/
  
  //DOM Content 
    let chargeBuy = document.getElementById("charge-buy");
    let chargePrice = document.getElementById("charge-price");
    let chargeLevel = document.getElementById("charge-level");
    let autoclickMultiple = document.getElementById("click-power-multiple");
  
    let chargePriceAmount = 50;
    let chargeLevelNumber = 1;
  
  // Refresh level/Price
  function refreshChargeLevel() {
    chargeLevel.innerHTML = chargeLevelNumber;
    chargePrice.innerHTML = chargePriceAmount;
    autoclickMultiple.innerHTML = clickPower;
  }
  
  // Booster click
    chargeBuy.addEventListener("click", () => {
      if (scoreCount >= chargePriceAmount) {
        scoreCount -= chargePriceAmount;
        chargeLevelNumber++;
        chargePriceAmount = Math.floor(chargePriceAmount * 1.20);
        clickPower+=1;
        refreshCookieScore();
        refreshChargeLevel();
        console.log(clickPower);
      } else {
        console.log('Not enough clicks!');
      }
    });
  
  /********************************
            Etincelle
  ********************************/
  // DOM Content 
  let etincelleBuy = document.getElementById("etincelle-buy");
  let etincellePrice = document.getElementById("etincelle-price");
  let etincelleLevel = document.getElementById("etincelle-level");
  
  let etincellePriceAmount = 200;
  let etincelleLevelNumber = 1;
  
  // Refresh level/Price
  function refreshEtincelleLevel() {
    etincelleLevel.innerHTML = etincelleLevelNumber;
    etincellePrice.innerHTML = etincellePriceAmount;
    autoclickMultiple.innerHTML = clickPower;
  }
  
  // Booster click
  etincelleBuy.addEventListener("click", () => {
    if (scoreCount >= etincellePriceAmount) {
      scoreCount -= etincellePriceAmount;
      etincelleLevelNumber++;
      etincellePriceAmount = Math.floor(etincellePriceAmount * 1.20);
      clickPower += 2;
      refreshCookieScore();
      refreshEtincelleLevel();
      console.log(clickPower);
    } else {
      console.log('Not enough clicks!');
    }
  });
  
  /********************************
            Fatal Foudre
  ********************************/
  // DOM Content 
  let fatalfoudreBuy = document.getElementById("fatalfoudre-buy");
  let fatalfoudrePrice = document.getElementById("fatalfoudre-price");
  let fatalfoudreLevel = document.getElementById("fatalfoudre-level");
  
  let fatalfoudrePriceAmount = 500;
  let fatalfoudreLevelNumber = 1;
  
  // Refresh level/Price
  function refreshFatalfoudreLevel() {
    fatalfoudreLevel.innerHTML = fatalfoudreLevelNumber;
    fatalfoudrePrice.innerHTML = fatalfoudrePriceAmount;
    autoclickMultiple.innerHTML = clickPower;
  }
  
  // Booster click
  fatalfoudreBuy.addEventListener("click", () => {
    if (scoreCount >= fatalfoudrePriceAmount) {
      scoreCount -= fatalfoudrePriceAmount;
      fatalfoudreLevelNumber++;
      fatalfoudrePriceAmount = Math.floor(fatalfoudrePriceAmount * 1.20);
      clickPower += 5;
      refreshCookieScore();
      refreshFatalfoudreLevel();
      console.log(clickPower);
    } else {
      console.log('Not enough clicks!');
    }
  });
  
  /********************************
            Trempette
  ********************************/
  // DOM Content 
  let trempetteBuy = document.getElementById("trempette-buy");
  let trempettePrice = document.getElementById("trempette-price");
  let trempetteLevel = document.getElementById("trempette-level");
  
  let trempettePriceAmount = 100;
  let trempetteLevelNumber = 1;
  
  // Refresh level/Price
  function refreshtrempetteLevel() {
    trempetteLevel.innerHTML = trempetteLevelNumber;
    trempettePrice.innerHTML = trempettePriceAmount;
    autoclickMultiple.innerHTML = clickPower;
  }
  
  // Booster click
  trempetteBuy.addEventListener("click", () => {
    if (scoreCount >= trempettePriceAmount) {
      scoreCount -= trempettePriceAmount;
      trempetteLevelNumber++;
      trempettePriceAmount = Math.floor(trempettePriceAmount * 1.20);
      clickPower += -10;
      refreshCookieScore();
      refreshChargetrempetteLevel();
      console.log(clickPower);
    } else {
      console.log('Not enough clicks!');
    }
  });
  
  /********************************

          Shop

********************************/
    /********************************
            Potion
  ********************************/
  //DOM Content 

  let potionBuy = document.getElementById ("potion-buy");
  let potionPrice = document.getElementById("potion-price");
  let potionLevel = document.getElementById("potion-level");
  let allMultiple2 = document.getElementById("autoclickmultiple2");
  let potionPower = 1;
  let potionPriceAmount = 500;
  let potionLevelNumber = 0;
  let allMultiple = 0;

  // Pika on click ajout
  potionBuy.addEventListener ("click", ()=> {

    // Fonction de loop
    function potionAutoStart() {
      window.setInterval(()=> {
        scoreCount = scoreCount + potionPower;
        refreshCookieScore();
      }, 1000);
    }

  //update du prix + exécution du loop 
    if (scoreCount >= potionPriceAmount){
      scoreCount -= potionPriceAmount;
      refreshCookieScore();
      potionLevelNumber +=1; 
      potionPriceAmount = Math.floor(potionPriceAmount * 1.20);
      refreshPotion();
      potionAutoStart();
    }

  // Rafraîchissement des HTML Pika
    function refreshPotion () {
      potionLevel.innerHTML = potionLevelNumber;
      potionPrice.innerHTML = potionPriceAmount;
      allMultiple += potionPower * potionLevelNumber;
      allMultiple2.innerHTML = allMultiple;
    }

  })

  /********************************
          Multi-Exp
********************************/

//DOM Content 
let multiexpBuy = document.getElementById("multiexp-buy");
let multiexpPrice = document.getElementById("multiexp-price");
let multiexpLevel = document.getElementById("multiexp-level");
// let multiexpMultiple = document.getElementById("multiexp-multiple");

let multiexpPower = 5;
let multiexpPriceAmount = 100;
let multiexpLevelNumber = 0;

//Rafraîchir HTML
function refreshMultiexp() {
  multiexpLevel.innerHTML = multiexpLevelNumber;
  multiexpPrice.innerHTML = multiexpPriceAmount;
  allMultiple += multiexpPower * multiexpLevelNumber;
  allMultiple2.innerHTML = allMultiple;
}

//Loop Multiexp
function multiexpStart () {
  let multiexpInt = window.setInterval(() => {
    scoreCount+= multiexpPower;
    refreshCookieScore();
  }, 1000);
}

// Event sur le click de multiexp
multiexpBuy.addEventListener("click", () => {
  if (scoreCount >= multiexpPriceAmount) {
    scoreCount-=multiexpPriceAmount;
    refreshCookieScore ();
    multiexpLevelNumber +=1;
    multiexpPriceAmount = Math.floor(multiexpPriceAmount * 1.20);
    multiexpStart();
    refreshMultiexp();
  }
});

  /********************************
          Terrain
********************************/

//DOM Content 
let terrainBuy = document.getElementById("terrain-buy");
let terrainPrice = document.getElementById("terrain-price");
let terrainLevel = document.getElementById("terrain-level");
// let multiexpMultiple = document.getElementById("multiexp-multiple");

let terrainPower = 25;
let terrainPriceAmount = 10000;
let terrainLevelNumber = 0;

//Rafraîchir HTML
function refreshTerrain() {
  terrainLevel.innerHTML = terrainLevelNumber;
  terrainPrice.innerHTML = terrainPriceAmount;
  allMultiple.innerHTML = terrainPower * terrainLevelNumber;
  allMultiple2.innerHTML = allMultiple;
}

//Loop Terrain
function terrainStart () {
  let terrainInt = window.setInterval(() => {
    scoreCount+= terrainPower;
    refreshCookieScore();
  }, 1000);
}

// Event sur le click de Terrain
terrainBuy.addEventListener("click", () => {
  if (scoreCount >= terrainPriceAmount) {
    scoreCount-=terrainPriceAmount;
    refreshCookieScore ();
    terrainLevelNumber +=1;
    terrainPriceAmount = Math.floor(terrainPriceAmount * 1.20);
    terrainStart();
    refreshTerrain();
  }
});
});