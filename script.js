document.addEventListener('DOMContentLoaded', function() {
  
  let scoreCount = 0;
  let autoclickPrice = 50;
  let autoclickLevel = 1;
  let clickPower = 1;
  
  //DOM Content 
  let autoclickBasePrice = document.getElementById("autoclick-price");
  let autoclickBaseLevel = document.getElementById("autoclick-level");
  let autoclickMultiple = document.getElementById("autoclick-multiple");
  let buyClickPower = document.getElementById("buy-click");
  let score = document.getElementById("score");
  let clickerButton = document.getElementById("counter");
  let buyPika = document.getElementById ("buy-pika");
  let pikaPrice = document.getElementById("pika-price");
  let pikaLevel = document.getElementById("pika-level");
  let pikaMultiple = document.getElementById("pika-multiple");
  let buyArena = document.getElementById("buy-arena");
  let arenaPrice = document.getElementById("arena-price");
  let arenaLevel = document.getElementById("arena-level");
  let arenaMultiple = document.getElementById("arena-multiple");

  // Refresh Score
  function refreshCookieScore() {
    score.innerHTML = scoreCount;
  }

  // Refresh level/Price
  function refreshLevel() {
    autoclickBaseLevel.innerHTML = autoclickLevel;
    autoclickBasePrice.innerHTML = autoclickPrice;
    autoclickMultiple.innerHTML = clickPower;
  }

  // Base du CC
  clickerButton.addEventListener('click', function(event) {
    event.preventDefault();
    scoreCount = scoreCount + clickPower;
    refreshCookieScore();
  });

/********************************

          Shop

********************************/

  buyClickPower.addEventListener("click", () => {
    if (scoreCount >= autoclickPrice) {
      scoreCount -= autoclickPrice;
      autoclickLevel++;
      autoclickPrice = Math.floor(autoclickPrice * 1.20);
      clickPower+=0.1;
      refreshCookieScore();
      refreshLevel();
      console.log(clickPower);
    } else {
      console.log('Not enough clicks!');
    }
  });


/********************************

          Autoclick

********************************/
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

          Arena

********************************/

let arenaPower = 2000;
let arenaPriceAmount = 10;
let arenaLevelNumber = 0;

function refreshArena() {
  arenaLevel.innerHTML = arenaLevelNumber;
  arenaPrice.innerHTML = arenaPriceAmount;
  arenaMultiple.innerHTML = arenaPower * arenaLevelNumber;
}

function autoArenaStart () {
  let autoArenaInt = window.setInterval(() => {
    scoreCount+= arenaPower;
    refreshCookieScore();
  }, 1000);
}

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

});