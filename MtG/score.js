const lives = document.querySelector('#lives');
const livesDisplay = document.querySelector('#score-display');
const difficulty = document.querySelector('#difficulty');
lives.onclick = function () {
    playerOneLife.textContent = `${lives.value}`;
    playerTwoLife.textContent = `${lives.value}`;
    if (lives.value === '10') {
        difficulty.textContent = 'sudden death';
    } else if (lives.value === '20') {
        difficulty.textContent = 'standard mode';
    } else if (lives.value === '30') {
        difficulty.textContent = 'longevity mode';
    } else {
        difficulty.textContent = 'n00b';
    }
}
const losingScore = 0;
let gameOver = false;
let defeatQuotes = ['Total Annihilation', 'Utter Defeat', 'Conquered', 'Bloodbath', 'Massacre']
let victoryQuotes = ['Always Victorious', 'Glorified Victory', 'Triumphant Conquest', 'Enemies Vanquished', 'Rejoice in Your Glory']

// parseInt(playerOneLife.textContent)===0 || parseInt(playerOneLife.textContent)===0){
//     gameOver = true;
// }
// if (gameOver=true){

// }
const playerOneLife = document.querySelector('#p1-score')
const playerTwoLife = document.querySelector('#p2-score')
const p1Plus = document.querySelector('#p1-plus')
const p2Plus = document.querySelector('#p2-plus')
const p1Minus = document.querySelector('#p1-minus')
const p2Minus = document.querySelector('#p2-minus')

p1Plus.addEventListener('click', function () {
    playerOneLife.textContent = parseInt(playerOneLife.textContent) + 1;

})

p1Minus.addEventListener('click', function () {
    if (!gameOver) {
        playerOneLife.textContent = parseInt(playerOneLife.textContent) - 1;
        if (parseInt(playerOneLife.textContent) === losingScore) {
            gameOver = true;
            for (let i = 0; i < defeatQuotes.length; i++) {
                document.querySelector('#p1-status').textContent = defeatQuotes[(Math.floor(Math.random() * i))];
                document.querySelector('#p1-status').classList.add('defeat');
                playerOneLife.classList.add('defeat');
            }
            for (let j = 0; j < victoryQuotes.length; i++) {
                document.querySelector('#p2-status').textContent = victoryQuotes[(Math.floor(Math.random() * j))];
                document.querySelector('#p2-status').classList.add('victory');
                playerTwoLife.classList.add('victory');
            }
        }
    }
})

p2Plus.addEventListener('click', function () {
    playerTwoLife.textContent = parseInt(playerTwoLife.textContent) + 1;
})

p2Minus.addEventListener('click', function () {
    if (!gameOver) {
        playerTwoLife.textContent = parseInt(playerTwoLife.textContent) - 1;
        if (parseInt(playerTwoLife.textContent) === losingScore) {
            gameOver = true;
            for (let i = 0; i < defeatQuotes.length; i++) {
                document.querySelector('#p2-status').textContent = defeatQuotes[(Math.floor(Math.random() * i))];
                document.querySelector('#p2-status').classList.add('defeat');
                playerTwoLife.classList.add('defeat');
            }
            for (let j = 0; j < victoryQuotes.length; i++) {
                document.querySelector('#p1-status').textContent = victoryQuotes[(Math.floor(Math.random() * j))];
                document.querySelector('#p1-status').classList.add('victory');
                playerOneLife.classList.add('victory');
            }
        }
    }
})

document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('#p2-status').classList.remove('victory', 'defeat');
    document.querySelector('#p1-status').classList.remove('victory', 'defeat');
    document.querySelector('#p2-status').textContent = '';
    document.querySelector('#p1-status').textContent = '';
    playerOneLife.classList.remove('victory', 'defeat');
    playerTwoLife.classList.remove('victory', 'defeat');
    playerOneLife.textContent = 20;
    playerTwoLife.textContent = 20;
    lives.value = '20';
    difficulty.textContent = 'standard mode';
    gameOver = false;
})