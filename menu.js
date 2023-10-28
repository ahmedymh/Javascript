        document.addEventListener('DOMContentLoaded', function() {
            // Shared DOM references
            var usernameForm = document.getElementById('usernameForm');
            var usernameInput = document.getElementById('username');
            var leaderboardModal = document.getElementById('leaderboard');
            var openLeaderboardButton = document.getElementById('ranking-button');
            var closeLeaderboardButton = document.getElementById('close-leaderboard');
            var leaderboardTableBody = document.querySelector("#leaderboard table tbody");
        
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
                var updatedScores = getUpdatedScores(); // Replace with actual score retrieval
        
                leaderboardTableBody.innerHTML = ''; // Clear existing rows
        
                updatedScores.forEach(function(score, index) {
                    var newRow = `
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
        });

        function Cookies() {
                document.getElementById('cookie-banner').style.display = 'none';
            }

            function getUpdatedScores() {
    // Cette fonction est un exemple et dépend de la manière dont vous stockez les scores des utilisateurs.
    // Ici, nous simulons une récupération de données.

    var userScores = [
        { username: "Hmitch", score: 50001 },
        { username: "Cthulwho", score: 3 },
        { username: "Eratz", score: 15000 },
        { username: "Onyx3O6", score: 100000000 }
    ];

    // Essayez de récupérer les scores de l'utilisateur depuis le localStorage
    var storedUserScore = localStorage.getItem('score');
    var storedUsername = localStorage.getItem('username');

    if (storedUserScore && storedUsername) {
        var currentUserScore = {
            username: storedUsername,
            score: parseInt(storedUserScore, 10) // Assurez-vous que le score est un nombre
        };

        // Vous pouvez choisir de remplacer le score de l'utilisateur s'il existe déjà ou simplement l'ajouter à la liste
        var existingUser = userScores.find(user => user.username === currentUserScore.username);
        
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

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    var gameplayMenu = document.getElementById('gameplay-menu');
    var attackMenu = document.getElementById('attack-menu');
    var shoppingMenu = document.getElementById('shopping-menu');

    var boutonAttaque = document.getElementById('attack');
    var boutonShop = document.getElementById('shop');
    var boutonBackFromAttack = document.getElementById('button-back-from-attack');
    var boutonBackFromShop = document.getElementById('button-back-from-shop');
    
    // Gestion de la modal des règles
    var rulesModal = document.getElementById('rules');
    var openRulesModalButton = document.getElementById('guide');
    var closeRulesModalButton = document.getElementById('close-modal');

    // Gestion de la modal du leaderboard
    var leaderboardModal = document.getElementById('leaderboard');
    var openLeaderboardButton = document.getElementById('ranking-button'); // Bouton pour ouvrir le leaderboard
    var closeLeaderboardButton = document.getElementById('close-leaderboard');

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

    function showLeaderboardModal() {
        leaderboardModal.classList.remove('hidden');
    }

    function hideLeaderboardModal() {
        leaderboardModal.classList.add('hidden');
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
                break;
            case openLeaderboardButton: // Cas où l'on gère l'ouverture du leaderboard
                showLeaderboardModal();
                break;
            case closeLeaderboardButton:
                hideLeaderboardModal();
                break;
        }
    });
});


