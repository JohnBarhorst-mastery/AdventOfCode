const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n');
const sample = fs.readFileSync('./sample.txt', 'utf8').split('\n');

function isDigit(char) {
    return !isNaN(parseInt(char));
}

function isSymbol(char) {
    return isNaN(parseInt(char)) && char !== '.'
}

function getRows(input) {
    return input.map(line => line.split(''));
}

function getSymbolCoordinates(input) {
    const rows = getRows(input);
    return rows.reduce((acc, row, rowPosition) => {
        if (!acc[rowPosition]) {
            acc[rowPosition] = [];
        }
        row.forEach((char, i) => {
            if (isSymbol(char)) {
                return acc[rowPosition].push(i)
            }
        });
        return acc
    }, {})
}

function getSerialNumbers(input) {
    const numsWithCoords = input.map((line, i) => {

    })
}

console.log(getSymbolCoordinates(sample))