const yams = (dice1, dice2, dice3, dice4, dice5)=>{

    let resultDice = 0;
    let arrayDice = [dice1, dice2, dice3, dice4, dice5];
    arrayDice.sort();

    //pour le brelan
    for (let i = 0; i < arrayDice.length - 2; i++) {
        if (arrayDice[i] === arrayDice[i + 1] && arrayDice[i] === arrayDice[i + 2]) {
            resultDice = 28;
        }
    }

    //pour le carré
    for (let i = 0; i < arrayDice.length - 3; i++) {
        if (arrayDice[i] === arrayDice[i + 1] && arrayDice[i] === arrayDice[i + 2] && arrayDice[i] === arrayDice[i + 3]) {
            resultDice = 35;
        }
    }

    //pour le yams
    for (let i = 0; i < arrayDice.length - 4; i++) {
        if (arrayDice[i] === arrayDice[i + 1] && arrayDice[i] === arrayDice[i + 2] && arrayDice[i] === arrayDice[i + 3] && arrayDice[i] === arrayDice[i + 4]) {
            resultDice = 50;
        }
    }

    return resultDice;
}

module.exports = yams;