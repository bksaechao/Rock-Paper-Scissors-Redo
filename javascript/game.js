var userChoice
var cpuChoice
var wins = 0
var lose = 0
var tie = 0

// displays score
function showScore() {
    document.getElementById("win-score").textContent = wins;
    document.getElementById("lose-score").textContent = lose;
    document.getElementById("tie-score").textContent = tie;
}

// Generates number to represent cpu's pick
function cpuGame() {
    const number = Math.floor(Math.random() * 3)
    cpuChoice = number;
    console.log("CPU Picked: " + cpuChoice)
}
// Hides displayed images
function clearPicks(){
            document.getElementById("paper-image").style.display = 'none';
            document.getElementById("scissor-image").style.display = 'none';
            document.getElementById("rock-image").style.display = 'none';
}

// Unhides the usuers pick
function displayUserChoice() {
    console.log(userChoice);
    if (userChoice === "rock-image"){
        document.getElementById("rock-image").style.display = 'initial';
    } else if (userChoice === "paper-image") {
        document.getElementById("paper-image").style.display = 'initial';
    } else if (userChoice === "scissor-image") {
        document.getElementById("scissor-image").style.display = 'initial';
    }
}

// 
function displayCpuChoice() {
    // rock match-up
    if (userChoice === "rock-image" && cpuChoice === 1) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock"> <img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper">'
        document.getElementById("title-message").innerText = "You Lost!"
        lose++
    } else if (userChoice === "rock-image" && cpuChoice === 2) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock"> <img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors">'
        document.getElementById("title-message").innerText = "You Won!"
        wins++
    } else if (userChoice === "rock-image" && cpuChoice === 0) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock"> <img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock">'
        document.getElementById("title-message").innerText = "It's a Tie!"
        tie++
    }
    // paper match-up
    if (userChoice === "paper-image" && cpuChoice === 0) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper"> <img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock">'
        document.getElementById("title-message").innerText = "You Won!"
        wins++
    } else if (userChoice === "paper-image" && cpuChoice === 2) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper"> <img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors">'
        document.getElementById("title-message").innerText = "You Lost!"
        lose++
    } else if (userChoice === "paper-image" && cpuChoice === 1) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper"> <img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper">'
        document.getElementById("title-message").innerText = "It's a Tie!"
        tie++
    }
    // scissor match-up
    if (userChoice === "scissor-image" && cpuChoice === 0) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors"> <img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock">'
        document.getElementById("title-message").innerText = "You Lost!"
        lose++
    } else if (userChoice === "scissor-image" && cpuChoice === 1) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors"> <img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper">'
        document.getElementById("title-message").innerText = "You Won!"
        wins++
    } else if (userChoice === "scissor-image" && cpuChoice === 2) {
        document.getElementById("rps-select").innerHTML = 
        '<img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors"> <img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors">'
        document.getElementById("title-message").innerText = "It's a Tie!"
        tie++
    }
}

// Calculate & update scoreboard
function updateScore() {
    document.getElementById("win-score").textContent = wins;
    document.getElementById("lose-score").textContent = lose;
    document.getElementById("tie-score").textContent = tie;
}

// reset game
function reset() {
    document.getElementById("rps-select").innerHTML = 
    '<img class="rps-image" id="rock-image" src="images/rock.jpeg" alt ="rock"><img class="rps-image" id="paper-image" src="images/paper.jpeg" alt ="paper"><img class="rps-image" id="scissor-image" src="images/scissors.jpeg" alt ="scissors">'
    document.getElementById("title-message").innerText = "ROCK PAPER SCISSORS!"
}

// Game starts on click
function gameStart() {
    document.addEventListener('click', e => {
        const img = e.target.closest('img');
        if (img) {
            userChoice = e.target.id;
            console.clear();
            cpuGame();
            clearPicks();
        }
        showScore();
        displayUserChoice();
        displayCpuChoice();
        updateScore();
        setTimeout(reset, 1000);
    });
}

gameStart();



