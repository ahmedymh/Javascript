document.addEventListener('DOMContentLoaded', function() {
  
  //DOM elements
  let pichu = document.getElementById("pichu");
  let pikachu = document.getElementById("pikachu");
  let raichu = document.getElementById("Raichu");
  
  let scoreCount = parseInt(localStorage.getItem("score")) || 0;
  let clickPower = parseInt(localStorage.getItem("clickPower")) || 1;

  
  // Reference to DOM elements
  let score = document.getElementById("score");
  function refreshCookieScore() {
      score.innerHTML = ` ${scoreCount}`;
      localStorage.setItem("score", scoreCount);
      localStorage.setItem ("clickPower", clickPower)
      console.log(scoreCount);
  }
  let evolutionOccured = parseInt(localStorage.getItem("evolution"));
  if (localStorage.getItem("evolution") === null) {
    // If it doesn't exist, create it with a default value of 1
    evolutionOccured = 1;
    localStorage.setItem("evolution", evolutionOccured);
  }
  
  
  ['pichu', 'pikachu', 'Raichu'].forEach(id => {
    document.getElementById(id).addEventListener('click', function(event) {
        togglePokeCoin(event);

        scoreCount += clickPower; 
        if (scoreCount >= 15000 && evolutionOccured === 1) {
            Evolution1();         
            evolutionOccured = 2; // Set it to 2 since evolution has occurred
            console.log(evolutionOccured);
            localStorage.setItem("evolution", evolutionOccured); // Update the local storage value
        }
        if (scoreCount < 0) {
            GameOver(); 
            console.log("gameover");
        } 

        // Update the score display
        refreshCookieScore();
    });
});

refreshCookieScore();

  
          /********************************
        
                  Game-Over
  
  ********************************/
  let myModal = document.getElementById("myModal");
  let closeGameOver = document.getElementById("close-gameover");
  closeGameOver.addEventListener("click", reset);

  function GameOver() {
    myModal.classList.remove("hidden");
    
    closeGameOver.onclick = function() {
      myModal.classList.add("hidden");
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
    clickPower+=10;
    autoclickMultipleAtt.innerHTML = autoclickMultipleAttAmount+=10;
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
    clickPower+=100;
    autoclickMultipleAtt.innerHTML = autoclickMultipleAttAmount+=100;
  }
  /********************************
  
            Pokeball
  
  ********************************/
  const scoreElement = document.createElement('div');
  scoreElement.className = 'score-popup';
  document.body.appendChild(scoreElement);

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
    let scoreWin = 0;

    pokeballElement.addEventListener('click', function(event) {
      pokeballElement.style.display = 'none';
      scoreWin = Math.floor(Math.random() * 100);
      scoreCount += scoreWin;
      refreshCookieScore();
  
      // Display the score at the mouse click coordinates
      scoreElement.innerText = `+${scoreWin}`;
      scoreElement.style.top = `${event.clientY}px`;
      scoreElement.style.left = `${event.clientX}px`;
      scoreElement.style.display = 'block';
  
      // Hide the score after one second
      setTimeout(() => {
          scoreElement.style.display = 'none';
      }, 1000);
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
    { id: "fatalfoudre", price: 10, level: 1, power: 5, initialPrice:10 },
    { id: "trempette", price: 1000, level: 1, power: -10, initialPrice:1000 }
  ];
  
  let pcSpentHTML = document.getElementById("spend");
  let pcSpent = 0;
  function refreshItemLevel(item) {
    const priceElement = document.getElementById(`${item.id}-price`);
    priceElement.innerHTML = item.price;
    autoclickMultipleAtt.innerHTML= autoclickMultipleAttAmount;
    pcSpentHTML.innerHTML = pcSpent;
    localStorage.setItem("AutoAttackAmount",autoclickMultipleAttAmount);
    localStorage.setItem(`itemLevel_${item.id}`, item.level);
  }
 
  function buyItem(item) {  
    const itemElement = document.getElementById(`${item.id}-buy`);
    itemElement.addEventListener("click", () => {
      if (scoreCount >= item.price) {
        scoreCount -= item.price;
        item.level++;
        pcSpent += item.price;
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
    const itemPrice = document.getElementById(`${item.id}-price`);
    itemPrice.innerHTML = item.price;
    allMultiple2.innerHTML = allMultiple;
    localStorage.setItem(`itemLevel_${item.id}`, item.level);
    localStorage.setItem("allMultiple", allMultiple);
    localStorage.setItem("cookiespent", pcSpent);
  }

  let itemInt;
  function buyItem2(item) {
    const itemBuy = document.getElementById(`${item.id}-buy`);
    itemBuy.addEventListener("click", () => {
      if (scoreCount >= item.price) {
        scoreCount -= item.price;
        refreshCookieScore();
        item.level++;
        pcSpent += item.price;
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

    //Boutons attaques + shop disabled 
  setInterval(() => {
    items.forEach(item => {
      const itemElement = document.getElementById(`${item.id}-buy`);
      if (scoreCount<item.price){
        itemElement.classList.add("disabled:opacity-25");
        itemElement.classList.add("cursor-not-allowed");
      }
      else {
        itemElement.classList.remove("disabled:opacity-25");
        itemElement.classList.remove("cursor-not-allowed");
      }
    });

    itemsData.forEach(item => {
      const itemElement = document.getElementById(`${item.id}-buy`);
      if (scoreCount<item.price){
        itemElement.classList.add("disabled:opacity-25");
        itemElement.classList.add("cursor-not-allowed");
      }
      else {
        itemElement.classList.remove("disabled:opacity-25");
        itemElement.classList.remove("cursor-not-allowed");
      }
    });
    localStorage.setItem("pcSpent",pcSpent);
  }, 10);

  // Items à delock
    // items.forEach(item => {
    //   const itemElementunlocked = document.getElementById(`${item.id}-unlocked`);
    //   const itemElement = document.getElementById(`${item.id}-buy`);
    //   if (scoreCount>item.price){
    //     itemElementunlocked.classList.remove("hidden");
    //     itemElement.classList.add("hidden");
    //   }
    // });
    // itemsData.forEach(item => {
    //   const itemElementunlocked = document.getElementById(`${item.id}-unlocked`);
    //   const itemElement = document.getElementById(`${item.id}-buy`);
    //   if (scoreCount>item.price){
    //     itemElementunlocked.classList.add("hidden");
    //     itemElement.classList.remove("hidden");
    //   }
    // });
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
      evolutionOccured = 3;
      localStorage.setItem("evolution", evolutionOccured);
      refreshCookieScore();
    }
  })
 

  /********************************
      
            Reset

  ********************************/
 document.getElementById("reset").addEventListener("click",reset);
 function reset (){
    scoreCount = 0;
    clickPower = 1;
    autoclickMultipleAttAmount=1;
    allMultiple=0;
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
    localStorage.clear();
    location.reload();
  };
 /********************************
      
            LeaderBoard + Modal

  ********************************/
    let usernameForm = document.getElementById('usernameForm');
    let usernameInput = document.getElementById('username');
    let leaderboardModal = document.getElementById('leaderboard');
    let openLeaderboardButton = document.getElementById('ranking-button');
    let closeLeaderboardButton = document.getElementById('close-leaderboard');
    let leaderboardTableBody = document.querySelector("#leaderboard table tbody");

    // Function to handle the username form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        var username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username); // Consider checking and sanitizing input
            console.log('Username submitted:', username);
        } else {
            alert('Please enter a valid username!');
        }
    }

    // Function to open the leaderboard modal and populate the table
    function showLeaderboardModal() {
        updateLeaderboard(); // Populate the table
        leaderboardModal.classList.remove('hidden');
    }

    function hideLeaderboardModal() {
        leaderboardModal.classList.add('hidden');
    }

    // Function to retrieve and populate the leaderboard
    function updateLeaderboard() {
        // Here you'd fetch new scores from the server/localStorage, then update the DOM.
        // This example assumes you have a method to retrieve updated scores.
        let updatedScores = getUpdatedScores(); // Replace with actual score retrieval

        leaderboardTableBody.innerHTML = ''; // Clear existing rows

        updatedScores.forEach(function(score, index) {
            let newRow = `
                <tr>
                    <td class="border px-4 py-2">${index + 1}</td>
                    <td class="border px-4 py-2">${score.username}</td>
                    <td class="border px-4 py-2">${score.score}</td>
                </tr>
            `;
            leaderboardTableBody.innerHTML += newRow;
        });
    }

    // Event listeners
    usernameForm.addEventListener('submit', handleFormSubmit);
    openLeaderboardButton.addEventListener('click', showLeaderboardModal);
    closeLeaderboardButton.addEventListener('click', hideLeaderboardModal);

    // Further logic and event listeners can be added here (e.g., for other menus or modals)

    // NOTE: The function 'getUpdatedScores' should be defined or replaced with your actual logic
    // for retrieving the latest scores. The auto-refresh logic should also be handled based on your application's requirements.

    /********************************
      Cookies
  ********************************/
  //DOM Content 
  let cookieBanner = document.getElementById("cookie-banner");
  let cookiesaccepted = document.getElementById("cookies-accept");
  let cookierefused = document.getElementById("cookies-refuse")
  function Cookies() {
    cookieBanner.classList.add("hidden");
    localStorage.setItem("cookies", "yes");
    }
  cookiesaccepted.addEventListener("click", Cookies);
  cookierefused.addEventListener("click", Cookies);
  function getUpdatedScores() {
  // Cette fonction est un exemple et dépend de la manière dont vous stockez les scores des utilisateurs.
  // Ici, nous simulons une récupération de données.

  let userScores = [
  { username: "Hmitch", score: 50001 },
  { username: "Cthulwho", score: 3 },
  { username: "Eratz", score: 15000 },
  { username: "Onyx3O6", score: 100000000 }
  ];

  // Essayez de récupérer les scores de l'utilisateur depuis le localStorage
  let storedUserScore = localStorage.getItem('score');
  let storedUsername = localStorage.getItem('username');

  if (storedUserScore && storedUsername) {
  let currentUserScore = {
      username: storedUsername,
      score: parseInt(storedUserScore, 10) // Assurez-vous que le score est un nombre
  };

  // Vous pouvez choisir de remplacer le score de l'utilisateur s'il existe déjà ou simplement l'ajouter à la liste
  let existingUser = userScores.find(user => user.username === currentUserScore.username);

  if (existingUser) {
      existingUser.score = currentUserScore.score; // Mettre à jour le score existant
  } else {
      userScores.push(currentUserScore); // Ajout du nouvel utilisateur
  }
  }

  // Trier les scores
  userScores.sort((a, b) => b.score - a.score);

  return userScores; // Retourner les scores mis à jour
  }

  // Éléments du DOM
  let gameplayMenu = document.getElementById('gameplay-menu');
  let attackMenu = document.getElementById('attack-menu');
  let shoppingMenu = document.getElementById('shopping-menu');

  let boutonAttaque = document.getElementById('attack');
  let boutonShop = document.getElementById('shop');
  let boutonBackFromAttack = document.getElementById('button-back-from-attack');
  let boutonBackFromShop = document.getElementById('button-back-from-shop');

  // Gestion de la modal des règles
  let rulesModal = document.getElementById('rules');
  let openRulesModalButton = document.getElementById('guide');
  let closeRulesModalButton = document.getElementById('close-modal');
  


  function hideAllMenus() {
  gameplayMenu.classList.add('hidden');
  attackMenu.classList.add('hidden');
  shoppingMenu.classList.add('hidden');
  }

  function showRulesModal() {
  rulesModal.style.display = 'flex';
  rulesModal.style.justifyContent = 'center';
  rulesModal.style.alignItems = 'center';
  }

  function hideRulesModal() {
  rulesModal.style.display = 'none';

  }
  items.forEach(item => {
    buyItem(item);
  });

  function showLeaderboardModal() {
  leaderboardModal.classList.remove('hidden');
  }

  function hideLeaderboardModal() {
  leaderboardModal.classList.add('hidden');
  }
  
  function initializeRules(){
    let isRulesApprouved = localStorage.getItem("isRulesAccepted");
    if (isRulesApprouved == "yes"){
      rulesModal.style.display = "none";
    }
  }
 
  document.addEventListener('click', function(event) {
  switch (event.target) {
      case boutonAttaque:
          hideAllMenus();
          attackMenu.classList.remove('hidden');
          break;
      case boutonShop:
          hideAllMenus();
          shoppingMenu.classList.remove('hidden');
          break;
      case boutonBackFromAttack:
          hideAllMenus();
          gameplayMenu.classList.remove('hidden');
          break;
      case boutonBackFromShop:
          hideAllMenus();
          gameplayMenu.classList.remove('hidden');
          break;
      case openRulesModalButton:
          showRulesModal();
          break;
      case closeRulesModalButton:
          hideRulesModal();
          localStorage.setItem("isRulesAccepted", "yes");
          break;
      case openLeaderboardButton: // Cas où l'on gère l'ouverture du leaderboard
          showLeaderboardModal();
          break;
      case closeLeaderboardButton:
          hideLeaderboardModal();
          hideRulesModal();
          break;
  }
  });
 /********************************
      
            Initialisation

  ********************************/
function initializing (){
  items.forEach(item =>{
    item.level = parseInt(localStorage.getItem(`itemLevel_${item.id}`)) || 1;
    item.price = Math.floor(item.initialPrice*(1.20**(item.level-1)));
    autoclickMultipleAttAmount = parseInt(localStorage.getItem("AutoAttackAmount")) || 1;
    refreshItemLevel(item);
  });
  itemsData.forEach(item =>{
    item.level = parseInt(localStorage.getItem(`itemLevel_${item.id}`)) || 0;
    item.price = Math.floor(item.initialPrice*(1.20**(item.level)));
    allMultiple = parseInt(localStorage.getItem("allMultiple")) || 0;
    for (i=0; i<item.level; i++){
        itemInt = window.setInterval(() => {
        scoreCount += item.power;
        refreshCookieScore();
      }, 1000);
    }
    refreshItem(item);
  });
  if (evolutionOccured == 2){
    pichu.classList.add("hidden"); 
    pikachu.classList.remove("hidden");
  }
  if (evolutionOccured == 3){
    pichu.classList.add("hidden");
    raichu.classList.remove("hidden");
  }
  initializeRules();
  if (localStorage.getItem("cookies")=="yes"){
    cookieBanner.classList.add("hidden");
   }
  pcSpent =parseInt(localStorage.getItem("pcSpent"));
  pcSpentHTML.innerHTML = pcSpent;
}           
initializing();
});
