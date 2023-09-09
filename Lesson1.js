let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
// Rock
function rock() {
    random = Math.random(); 
let computer = '';
let player = 'rock';
if (random >= 0 && random < 1 / 3) {
    computer = 'rock';
    score.ties += 1;
    document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    alert(`You chose ${player} and computer chose ${computer}. Tie.`);
} else if (random >= 1 / 3 && random < 2 / 3) {
    computer = 'paper';
    score.losses += 1;
    document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    alert(`You chose ${player} and computer chose ${computer}. You lose.`);
} else if (random >= 2 / 3 && random < 1) {
    computer = 'scissors';
    score.wins += 1;
    document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    alert(`You chose ${player} and computer chose ${computer}. You win.`);
}
}
//Paper
function paper() {
    let random = Math.random(); 
    let computer = '';
    let player = 'paper';
    if (random >= 0 && random < 1 / 3) {
        computer = 'rock';
        score.wins += 1;
        document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(`You chose ${player} and computer chose ${computer}. You win.`);
    } else if (random >= 1 / 3 && random < 2 / 3) {
        computer = 'paper';
        score.ties += 1;
        document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(`You chose ${player} and computer chose ${computer}. Tie.`);
    } else if (random >= 2 / 3 && random < 1) {
        computer = 'scissors';
        score.losses += 1;
        document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(`You chose ${player} and computer chose ${computer}. You lose.`);
    }
    }
    //Scissors
    function scissors() {
        let random = Math.random(); 
        let computer = '';
        let player = 'scissors';
        if (random >= 0 && random < 1 / 3) {
            computer = 'rock';
            score.losses += 1;
            document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
            alert(`You chose ${player} and computer chose ${computer}. You lose.`);
        } else if (random >= 1 / 3 && random < 2 / 3) {
            computer = 'paper';
            score.wins += 1;
            document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
            alert(`You chose ${player} and computer chose ${computer}. You win.`);
        } else if (random >= 2 / 3 && random < 1) {
            computer = 'scissors';
            score.ties += 1;
            document.querySelector('.p5').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
            alert(`You chose ${player} and computer chose ${computer}. Tie.`);
        }
        }
//Reset-score
function reset() {
alert('Score reset!');
document.querySelector('.p5').innerHTML = 'Wins: 0 Losses: 0 Ties: 0';
}
//All
function all() {
    let random = Math.random()
    if (random >= 0 && random < 1 / 3) {
        rock();
    } else if (random >= 1 / 3 && random < 2 / 3) {
        paper();
    } else if (random >= 2 / 3 && random < 1) {
        scissors();
    }
}