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
      fatalfoudrePriceAmount = Math.floor(etincellePriceAmount * 1.20);
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
      refreshtrempetteLevel();
      console.log(clickPower);
    } else {
      console.log('Not enough clicks!');
    }
  });
  
  /********************************
  
            Attaque
  
  ********************************/
  //DOM Content 
  
  let buyPika = document.getElementById ("buy-pika");
  let pikaPrice = document.getElementById("pika-price");
  let pikaLevel = document.getElementById("pika-level");
  let pikaMultiple = document.getElementById("pika-multiple");
  let pikaPower = 50;
  let pikaPriceAmount = 20;
  let pikaLevelNumber = 0;
  
  // Pika on click ajout
  buyPika.addEventListener ("click", ()=> {
  
    // Fonction de loop
    function pikaAutoStart() {
       window.setInterval(()=> {
        scoreCount = scoreCount + pikaPower;
        refreshCookieScore();
      }, 1000);
    }
  
  //update du prix + exécution du loop 
    if (scoreCount >= pikaPriceAmount){
      scoreCount -= pikaPriceAmount;
      refreshCookieScore();
      pikaLevelNumber +=1; 
      pikaPriceAmount = Math.floor(pikaPriceAmount * 1.20);
      refreshPika();
      pikaAutoStart();
    }
  
  // Rafraîchissement des HTML Pika
    function refreshPika () {
      pikaLevel.innerHTML = pikaLevelNumber;
      pikaPrice.innerHTML = pikaPriceAmount;
      pikaMultiple.innerHTML = pikaPower * pikaLevelNumber;
    }
  
  })
  
  /********************************
  
            Shop
  
  ********************************/
  //DOM Content 
  let buyArena = document.getElementById("buy-arena");
  let arenaPrice = document.getElementById("arena-price");
  let arenaLevel = document.getElementById("arena-level");
  let arenaMultiple = document.getElementById("arena-multiple");
  
  let arenaPower = 2000;
  let arenaPriceAmount = 10;
  let arenaLevelNumber = 0;
  
  //Rafraîchir HTML
  function refreshArena() {
    arenaLevel.innerHTML = arenaLevelNumber;
    arenaPrice.innerHTML = arenaPriceAmount;
    arenaMultiple.innerHTML = arenaPower * arenaLevelNumber;
  }
  
  //Loop Arena
  function autoArenaStart () {
    let autoArenaInt = window.setInterval(() => {
      scoreCount+= arenaPower;
      refreshCookieScore();
    }, 1000);
  }
  
  // Event sur le click de l'arena
  buyArena.addEventListener("click", () => {
    if (scoreCount >= arenaPriceAmount) {
      scoreCount-=arenaPriceAmount;
      refreshCookieScore ();
      arenaLevelNumber +=1;
      arenaPriceAmount = Math.floor(arenaPriceAmount * 1.20);
      autoArenaStart();
      refreshArena();
    }
  })
  
  
  // /********************************
  
  //           Toggle Pokecoins
  
  // ********************************/
  // // DOM Content
  //   document.getElementById('pichu').addEventListener('click', togglePokeCoin);
  //   document.getElementById('pikachu').addEventListener('click', togglePokeCoin);
  //   document.getElementById('Raichu').addEventListener('click', togglePokeCoin);
  
  //   function togglePokeCoin(event) {
  //   let pokeCoin = document.getElementById('pokecoin');
  //   let gameInterface = document.getElementById('gameplay-interface');
  
    
  //   let clickX = event.clientX;
  //   let clickY = event.clientY;
  
  //   // Obtenir la position de l'élément 'gameplay-interface'
  //   let rect = gameInterface.getBoundingClientRect();
  
  //   let relativeX = clickX - rect.left;
  //   let relativeY = clickY - rect.top;
  
  //   pokeCoin.style.left = relativeX + 'px';
  //   pokeCoin.style.top = relativeY + 'px';
  
  //   pokeCoin.classList.remove('hidden');
  //   pokeCoin.style.animation = 'jump 1s ease';
  
  //   setTimeout(() => {
  //     pokeCoin.style.removeProperty('animation');
  //     pokeCoin.classList.add('hidden');
  //   }, 1000); 
  // }
  
    
  });