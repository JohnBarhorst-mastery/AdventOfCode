const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n');
const sample = fs.readFileSync('./sample.txt', 'utf8').split('\n');

const maximums = {
    'red': 12,
    'blue': 14,
    'green': 13
}

function getGameNumber(line) {
    const [games, allHands] = line.split(':');
    return parseInt(games.split(' ')[1]);
}


function getHands(line) {
    const [games, allHands] = line.split(':');
    const hands = allHands.trim().split(';').map((hand) => hand.trim());
    const parsedHands = hands.map((hand) => {
        const obj = {};
        const cubes = hand.split(', ');
        cubes.forEach((cube) => {
            const [value, key] = cube.split(' ');
            obj[key] = parseInt(value);
        });
        return obj;
    });
    return parsedHands
}

function getParsedInput(input) {
    const games = input.map((line) => {
        const gameNumber = getGameNumber(line);
        const hands = getHands(line);

        return {
            gameNumber,
            hands
        }
    });
    return games;
}

function isPossible(hand, maximums) {
    const keys = Object.keys(hand);
    const values = Object.values(hand);
    const isPossible = values.every((value, index) => {
        const key = keys[index];
        return value <= maximums[key];
    });
    return isPossible;
}

function possibleHands(hands, maximums) {
    const possibleHands = hands.filter((hand) => isPossible(hand, maximums));
    return possibleHands;
}

function getPossibleGames(input, maximums) {
    return input.filter((game) => {
        return game.hands.every((hand) => isPossible(hand, maximums));
    });
}

function getSumOfGames(games) {
    return games.reduce((acc, game) => game.gameNumber + acc, 0);
}

const parsedInput = getParsedInput(input);
const filteredInput = getPossibleGames(parsedInput, maximums);
const reducedInput = getSumOfGames(filteredInput);

console.log(reducedInput)

// part 2

const minumums = parsedInput.reduce((acc, game) => {
    const obj = acc;
    game.hands.forEach((hand) => {
        const keys = Object.keys(hand);
        keys.forEach((key) => {
            if (!obj[key]) {
                obj[key] = hand[key];
            } else if (obj[key] > hand[key]) {
                obj[key] = hand[key];
            }
        });
        return obj;
    });
})

console.log(minumums)