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

  // Fonction de loop
  let potionInt;
  function potionAutoStart() {
    potionInt = window.setInterval(()=> {
      scoreCount = scoreCount + potionPower;
      refreshCookieScore();
    }, 1000);
  }

  // Rafraîchissement des HTML Pika
  function refreshPotion () {
    potionLevel.innerHTML = potionLevelNumber;
    potionPrice.innerHTML = potionPriceAmount;
    allMultiple += potionPower * potionLevelNumber;
    allMultiple2.innerHTML = allMultiple;
  }
  // Pika on click ajout
  potionBuy.addEventListener ("click", ()=> {
  //update du prix + exécution du loop 
    if (scoreCount >= potionPriceAmount){
      scoreCount -= potionPriceAmount;
      refreshCookieScore();
      potionLevelNumber +=1; 
      potionPriceAmount = Math.floor(potionPriceAmount * 1.20);
      refreshPotion();
      potionAutoStart();
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
  let multiexpPriceAmount = 2500;
  let multiexpLevelNumber = 0;

  //Rafraîchir HTML
  function refreshMultiexp() {
    multiexpLevel.innerHTML = multiexpLevelNumber;
    multiexpPrice.innerHTML = multiexpPriceAmount;
    allMultiple += multiexpPower * multiexpLevelNumber;
    allMultiple2.innerHTML = allMultiple;
  }

  //Loop Multiexp
  let multiexpInt;
  function multiexpStart () {
      multiexpInt = window.setInterval(() => {
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
    allMultiple += terrainPower * terrainLevelNumber;
    allMultiple2.innerHTML = allMultiple;
  }

  //Loop Terrain
  let terrainInt;
  function terrainStart () {
      terrainInt = window.setInterval(() => {
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

  /********************************
      
            Reset

  ********************************/
            document.getElementById("reset").addEventListener("click", () => {
                localStorage.clear();
                scoreCount = 0;
                clickPower = 1;
                chargeLevelNumber = 1;
                chargePriceAmount = 50;
                etincelleLevelNumber = 1;
                etincellePriceAmount = 200;
                fatalfoudreLevelNumber = 1;
                fatalfoudrePriceAmount = 500;
                trempetteLevelNumber = 1;
                trempettePriceAmount = 1000;
                potionLevelNumber = 0;
                potionPriceAmount = 500;
                multiexpLevelNumber = 0;
                multiexpPriceAmount = 2500;
                terrainLevelNumber = 0;
                terrainPriceAmount = 10000;
                refreshCookieScore();
                refreshEtincelleLevel();
                refreshChargeLevel();
                refreshFatalfoudreLevel();
                refreshtrempetteLevel();
                clearInterval(potionInt);
                clearInterval(multiexpInt);
                clearInterval(terrainInt);
                refreshPotion();
                refreshMultiexp();
                refreshTerrain();
                count = 0;
                raichu.classList.add("hidden");
                pikachu.classList.add("hidden");
                pichu.classList.remove("hidden");
                listpierre2.classList.add("hidden");
                listpierre1.classList.remove("hidden");
                allMultiple=0;
              })