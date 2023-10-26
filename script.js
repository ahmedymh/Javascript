document.addEventListener('DOMContentLoaded', function() {
  
  //DOM elements
  let pichu = document.getElementById("pichu");
  let pikachu = document.getElementById("pikachu");
  let raichu = document.getElementById("Raichu");

  let scoreCount = parseInt(localStorage.getItem("score")) || 0;
  let clickPower = 1;

  // Reference to DOM elements
  let score = document.getElementById("score");
  let evolutionOccurred = false;
  function refreshCookieScore() {
      score.innerHTML = `Score : ${scoreCount}`;
      console.log(scoreCount);
  }

  ['pichu', 'pikachu', 'Raichu'].forEach(id => {
    document.getElementById(id).addEventListener('click', function(event) {
        togglePokeCoin(event);
        // Suppose clicking these elements also affects the score.
        scoreCount += clickPower; 
        if(scoreCount === 10 && !evolutionOccurred ) {
            Evolution1();
            console.log("Evolution happened!");
            evolutionOccurred = true; // Set the flag to true to indicate evolution has occurred
        }
        if (scoreCount <0) {
          GameOver(); 
        }
        localStorage.setItem("score", scoreCount);
        refreshCookieScore(); // Update the score display
    });
});
refreshCookieScore();

  
          /********************************
        
                  Game-Over
  
  ********************************/
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", reset);

btn.addEventListener("click", GameOver);
function GameOver(){
modal.style.display="block";
reset();
span.onclick = function() {
  modal.style.display = "none";
}
}
  
    /********************************
  
            TogglePokeCoins
  
  ********************************/
  // Attaching the same click event to multiple elements
 

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
  
           Evolution Animation
  
  ********************************/

  function toggleHidden(element) {
    element.classList.toggle('hidden');
  }

  function Evolution1() {
    // Task 1: Show and hide Pichu 3 times
    console.log("fonction called")
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        toggleHidden(pichu);
      }, i * 500);
    }

    // Task 2: Show and hide Pichu and Raichu alternatively 3 times
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          toggleHidden(pichu);
          toggleHidden(pikachu);
        }, i * 500);
      }
    }, 6 * 500);

    setTimeout(() => {
      pichu.classList.add("hidden");
    }, 12 * 500);

    // Task 3: Show and hide Raichu 3 times
    setTimeout(() => {
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          toggleHidden(pikachu);
        }, i * 500);
      }
    }, 12 * 500);
    
  }
  function Evolution2() {
    // Task 1: Show and hide Pichu 3 times
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        toggleHidden(pikachu);
      }, i * 500);
    }

    // Task 2: Show and hide Pichu and Raichu alternatively 3 times
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          toggleHidden(pikachu);
          toggleHidden(raichu);
        }, i * 500);
      }
    }, 6 * 500);

    setTimeout(() => {
      pikachu.classList.add("hidden");
    }, 12 * 500);

    // Task 3: Show and hide Raichu 3 times
    setTimeout(() => {
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          toggleHidden(raichu);
        }, i * 500);
      }
    }, 12 * 500);
    
  }
  /********************************
  
            Pokeball
  
  ********************************/

  const pokeballElement = document.getElementById('pokeball');
    const gameplayWrapper = document.getElementById('gameplay-interface');
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

          Attaques

  ********************************/
    // DOM Content references
    let autoclickMultipleAtt = document.getElementById("autoclick-multiple");
    let autoclickMultipleAttAmount=1;
  const items = [
    { id: "charge", price: 50, level: 1, power: 1, initialPrice:50 },
    { id: "etincelle", price: 200, level: 1, power: 2, initialPrice:200 },
    { id: "fatalfoudre", price: 500, level: 1, power: 5, initialPrice:500 },
    { id: "trempette", price: 1000, level: 1, power: -10, initialPrice:1000 }
  ];

  function refreshItemLevel(item) {
    const element = document.getElementById(`${item.id}-level`);
    const priceElement = document.getElementById(`${item.id}-price`);
    element.innerHTML = item.level;
    priceElement.innerHTML = item.price;
    autoclickMultipleAtt.innerHTML= autoclickMultipleAttAmount;
  }

  function buyItem(item) {
    const itemElement = document.getElementById(`${item.id}-buy`);
    itemElement.addEventListener("click", () => {
      if (scoreCount >= item.price) {
        scoreCount -= item.price;
        item.level++;
        item.price = Math.floor(item.price * 1.20);
        clickPower += item.power;
        autoclickMultipleAttAmount += item.power;
        refreshCookieScore();
        refreshItemLevel(item);       
        console.log(clickPower);
      } else {
        console.log('Not enough clicks!');
      }
    });
  }
  items.forEach(item => {
    buyItem(item);
  });
  /********************************

          Shop

  ********************************/
  let allMultiple = 0;
  let allMultiple2 = document.getElementById("autoclickmultiple2");

  const itemsData = [
    { id: "potion", price: 500, power: 1, initialPrice:500, level:0},
    { id: "multiexp", price: 2500, power: 5, initialPrice :2500, level:0},
    { id: "terrain", price: 10000, power: 25, initialPrice:10000, level:0}
  ];
  
  function refreshItem(item) {
    const itemLevel = document.getElementById(`${item.id}-level`);
    const itemPrice = document.getElementById(`${item.id}-price`);
    itemLevel.innerHTML = item.level;
    itemPrice.innerHTML = item.price;
    allMultiple2.innerHTML = allMultiple;
  }

  let itemInt;
  function buyItem2(item) {
    const itemBuy = document.getElementById(`${item.id}-buy`);
    itemBuy.addEventListener("click", () => {
      if (scoreCount >= item.price) {
        scoreCount -= item.price;
        refreshCookieScore();
        item.level++;
        item.price = Math.floor(item.price * 1.20);
        itemInt = window.setInterval(() => {
          scoreCount += item.power;
          refreshCookieScore();
        }, 1000);
        allMultiple += item.power * item.level;
        refreshItem(item);
      }
    });
  }
  
  itemsData.forEach(item => {
    item.level = 0;
    buyItem2(item);
  });
  
    /********************************
      
            Pierre évolutive

  ********************************/

     /********************************
            Evolution 2
  ********************************/
    //DOM Content
  let pierreBuy = document.getElementById("pierre-buy");
  let pierrePriceAmount = 50000;

  //action on click
  pierreBuy.addEventListener("click",() => {
    if (scoreCount>=pierrePriceAmount){
      scoreCount-=pierrePriceAmount;
      Evolution2();
      refreshCookieScore();
    }
  })
 

  /********************************
      
            Reset

  ********************************/
 document.getElementById("reset").addEventListener("click",reset);
 function reset (){
    evolutionOccurred=false;
    scoreCount = 0;
    clickPower = 1;
    refreshCookieScore();
    items.forEach(item => {
        clearInterval(itemInt);
        item.level = 1;
        item.price = item.initialPrice;
        refreshItemLevel(item);
    });

    itemsData.forEach(item => {
        clearInterval(item.interval);
        item.level = 1;
        item.price = item.initialPrice;
        refreshItem(item);
    });
  
          pichu.classList.remove("hidden");
          pikachu.classList.add("hidden");
          raichu.classList.add("hidden");
        };
                
      });
      ;