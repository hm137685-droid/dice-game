
//random number 1 to 6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

//dice dots
showDice("dice1", randomNum1);
showDice("dice2", randomNum2);

//check winner
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

//dots function
function showDice(diceId, number) {
    let dice = document.getElementById(diceId); // ye andar hona chahiye
    dice.innerHTML = "";

    //dot positions
    let positions = {
        1: ["center"],
        2: ["top-left", "bottom-right"],
        3: ["top-left", "center", "bottom-right"],
        4: ["top-left", "top-right", "bottom-left", "bottom-right"],
        5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
        6: ["top-left", "top-right", "center-left", "center-right", "bottom-left", "bottom-right"]
    }

    positions[number].forEach(pos => {
        let dot = document.createElement("div");
        dot.classList.add("dot", pos); 
        dice.appendChild(dot);
    });
}