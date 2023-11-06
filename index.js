const yams = (dice1, dice2, dice3, dice4, dice5)=>{

    let resultDice = 0;
    let arrayDice = [dice1, dice2, dice3, dice4, dice5];
    arrayDice.sort();

    //Pour le BRELAN
    for (let index = 0; index < arrayDice.length - 2; index++) {
        if (arrayDice[index] === arrayDice[index + 1] && arrayDice[index] === arrayDice[index + 2]) {
            resultDice = 28;
        }
    }

    //pour le CARRE
    for (let index = 0; index < arrayDice.length - 3; index++) {
        if (arrayDice[index] === arrayDice[index + 1] && arrayDice[index] === arrayDice[index + 2] && arrayDice[index] === arrayDice[index + 3]) {
            resultDice = 35;
        }
    }

    //pour le YAMS
    for (let index = 0; index < arrayDice.length - 4; index++) {
        if (arrayDice[index] === arrayDice[index + 1] && arrayDice[index] === arrayDice[index + 2] && arrayDice[index] === arrayDice[index + 3] && arrayDice[index] === arrayDice[index + 4]) {
            resultDice = 50;
        }
    }

    //Pour faire un FULL
    for (let index = 0; index < arrayDice.length - 2; index++) {
        if (arrayDice[index] === arrayDice[index + 1] && arrayDice[index] === arrayDice[index + 2]) {
            // Si un brelan est trouvé, vérifiez s'il y a une paire
            for (let j = 0; j < arrayDice.length - 1; j++) {
                if (arrayDice[j] === arrayDice[j + 1] && arrayDice[j] !== arrayDice[index]) {
                    resultDice = 30;
                }
            }
        }
    }

    //Pour la GRANDE SUITE
    for(let index = 0; index < arrayDice.length; index++){
        if(arrayDice[index] < arrayDice[index + 1]
            && arrayDice[index + 1] < arrayDice[index + 2]
            && arrayDice[index + 2] < arrayDice[index + 3]
            && arrayDice[index + 3] < arrayDice[index + 4] )
        {
            resultDice = 40;
        }
    }


    return resultDice;
}

module.exports = yams;