const input = [
    "abaacccccccccccccaaaaaaaccccccccccccccccccccccccccccccccccaaaaaa",
    "abaaccccccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccaaaa",
    "abaaaaacccccccccaaaaaaaaaaaaccccccccccccccccccccccccccccccccaaaa",
    "abaaaaaccccccccaaaaaaaaaaaaaacccccccccccccccccdcccccccccccccaaaa",
    "abaaaccccccccccaaaaaaaaccacacccccccccccccccccdddcccccccccccaaaaa",
    "abaaacccccccccaaaaaaaaaaccaaccccccccccccciiiiddddcccccccccccaccc",
    "abcaaaccccccccaaaaaaaaaaaaaaccccccccccciiiiiijddddcccccccccccccc",
    "abccaaccccccccaccaaaaaaaaaaaacccccccccciiiiiijjddddccccaaccccccc",
    "abccccccccccccccaaacaaaaaaaaaaccccccciiiiippijjjddddccaaaccccccc",
    "abccccccccccccccaacccccaaaaaaacccccciiiippppppjjjdddddaaaaaacccc",
    "abccccccccccccccccccccaaaaaaccccccckiiippppppqqjjjdddeeeaaaacccc",
    "abccccccccccccccccccccaaaaaaccccckkkiippppuupqqjjjjdeeeeeaaccccc",
    "abccccccccccccccccccccccccaaccckkkkkkipppuuuuqqqjjjjjeeeeeaccccc",
    "abccccccccccccccccccccccccccckkkkkkoppppuuuuuvqqqjjjjjkeeeeccccc",
    "abcccccccccccccccccccccccccckkkkooooppppuuxuvvqqqqqqjkkkeeeecccc",
    "abccaaccaccccccccccccccccccckkkoooooopuuuuxyvvvqqqqqqkkkkeeecccc",
    "abccaaaaacccccaaccccccccccckkkoooouuuuuuuxxyyvvvvqqqqqkkkkeecccc",
    "abcaaaaacccccaaaacccccccccckkkooouuuuxxxuxxyyvvvvvvvqqqkkkeeeccc",
    "abcaaaaaaaaaaaaacccccccccccjjjooottuxxxxxxxyyyyyvvvvrrrkkkeecccc",
    "abcccaaaacaaaaaaaaacaaccccccjjoootttxxxxxxxyyyyyyvvvrrkkkfffcccc",
    "SbccaacccccaaaaaaaaaaaccccccjjjooottxxxxEzzzyyyyvvvrrrkkkfffcccc",
    "abcccccccccaaaaaaaaaaaccccccjjjooootttxxxyyyyyvvvvrrrkkkfffccccc",
    "abcaacccccaaaaaaaaaaaccccccccjjjooottttxxyyyyywwvrrrrkkkfffccccc",
    "abaaacccccaaaaaaaaaaaaaacccccjjjjonnttxxyyyyyywwwrrlllkfffcccccc",
    "abaaaaaaaaaaacaaaaaaaaaaccccccjjjnnnttxxyywwyyywwrrlllffffcccccc",
    "abaaaaaaaaaaaaaaaaaaaaaaccccccjjjnntttxxwwwwwywwwrrlllfffccccccc",
    "abaaccaaaaaaaaaaaaaaacccccccccjjjnntttxwwwsswwwwwrrlllfffccccccc",
    "abaacccaaaaaaaacccaaacccccccccjjinnttttwwsssswwwsrrlllgffacccccc",
    "abccccaaaaaaccccccaaaccccccccciiinnntttsssssssssssrlllggaacccccc",
    "abccccaaaaaaaccccccccccaaccccciiinnntttsssmmssssssrlllggaacccccc",
    "abccccaacaaaacccccccaacaaaccccciinnnnnnmmmmmmmsssslllgggaaaacccc",
    "abccccccccaaacccccccaaaaacccccciiinnnnnmmmmmmmmmmllllgggaaaacccc",
    "abaaaccccccccccccccccaaaaaacccciiiinnnmmmhhhmmmmmlllgggaaaaccccc",
    "abaaaaacccccccccccaaaaaaaaaccccciiiiiiihhhhhhhhmmlgggggaaacccccc",
    "abaaaaaccccaaccccaaaaaaacaacccccciiiiihhhhhhhhhhggggggcaaacccccc",
    "abaaaaccccaaaccccaaaacaaaaacccccccciiihhaaaaahhhhggggccccccccccc",
    "abaaaaaaacaaacccccaaaaaaaaaccccccccccccccaaaacccccccccccccccccaa",
    "abaacaaaaaaaaaaaccaaaaaaaaccccccccccccccccaaaccccccccccccccccaaa",
    "abcccccaaaaaaaaacccaaaaaaaccccccccccccccccaacccccccccccccccccaaa",
    "abccccccaaaaaaaaaaaaaaaaacccccccccccccccccaaacccccccccccccaaaaaa",
    "abcccccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaa"
]



const sample = [
    "Sabqponm",
    "abcryxxl",
    "accszExk",
    "acctuvwj",
    "abdefghi"
]

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// from day 3 because it's faster than looking it up.
const uppercaseAlphabet = alpha.map((x) => String.fromCharCode(x));
const lowercaseAlphabet = uppercaseAlphabet.map(l => l.toLowerCase());
// PT 1
// can't move up higher than 1.
// Can move down no matter what. I think... but probably don't want to.
// S = start, E = end.
// S has height of a, E has height of z

// map out potential moves
// Find start and end
// map out potential paths?

// log coords to know where visited?

function createGraphData(arr) {
    return arr.reduce((acc, str, y) => {
        const numbered = str.split('').map((l, x) => {
            let point = {
                height: lowercaseAlphabet.indexOf(l),
                l, y, x,
                f: 0,
                g: 0,
                h: 0,
                connections: [],
                parent: undefined
            }
            if (l === 'S') {
                acc.sCoord.x = x;
                acc.sCoord.y = y;
                point.height = lowercaseAlphabet.indexOf('a');
            }
            if (l === 'E') {
                acc.eCoord.x = x;
                acc.eCoord.y = y;
                point.height = lowercaseAlphabet.indexOf('z');
            }
            return point;
        });
        acc.mappedArray.push(numbered);
        return acc;
    }, { mappedArray: [], sCoord: { x: 0, y: 0 }, eCoord: { x: 0, y: 0 } })
}

function heuristic(position0, position1) {
    let d1 = Math.abs(position1.x - position0.x);
    let d2 = Math.abs(position1.y - position0.y);
    return d1 + d2;
}

function canMove(location, destination) {
    return location.height + 1 >= destination.height
}

function setConnections(mappedArray) {
    return mappedArray.reduce((acc, row, y) => {
        const mappedRow = row.map((point, x) => {
            const neighbors = {
                'up': y !== 0 ? mappedArray[y - 1][x] : null,
                'right': mappedArray[y][x + 1],
                'down': y !== mappedArray.length - 1 ? mappedArray[y + 1][x] : null,
                'left': mappedArray[y][x - 1]
            };

            Object.keys(neighbors).forEach(direction => {
                if (neighbors[direction]) {
                    if (canMove(point, neighbors[direction])) {
                        point.connections.push(neighbors[direction])
                    }
                }
            });
            return point;
        });
        acc.push(mappedRow);
        return acc;
    }, [])
}

function aStar(tree, start, end) {
    let openList = [];
    let closedList = [];
    const startItem = tree[start.y][start.x];
    const endItem = tree[end.y][end.x];
    // Set starting point
    openList.push(startItem);

    while (openList.length > 0) {
        let lowestIndex = 0;

        openList.forEach(({ f }, i) => {
            if (f < openList[lowestIndex].f) {
                lowestIndex = i;
            }
        });

        let current = openList[lowestIndex];

        if (current === endItem) {
            let path = [];
            let temp = current;
            path.push(temp);
            while (temp.parent) {
                path.push(temp.parent);
                temp = temp.parent;
            }
            return path.reverse();
        }
        openList.splice(lowestIndex, 1);
        closedList.push(current);

        let { connections } = current;
        connections.forEach((connection, cIndex) => {

            if (!closedList.includes(connection)) {
                let possibleG = current.g + 1;

                if (!openList.includes(connection)) {
                    openList.push(connection);
                } else if (possibleG >= connection.g) {
                    return;
                }
                connection.g = possibleG;
                connection.h = heuristic(connection, endItem);
                connection.f = connection.g + connection.h;
                connection.parent = current;
            }
        })
    }
    console.log('Path not found for start', start);
    return [];
}

function getAnswer1(input) {
    const { mappedArray, sCoord, eCoord } = createGraphData(input);
    const graphWithConnections = setConnections(mappedArray);
    const answer = aStar(graphWithConnections, sCoord, eCoord);
    return answer.length - 1;
}

// Part 2 need to find the closest starting point with height a.
// convoluted way of getting around reference issues:
function getAllACoords(input) {
    const { mappedArray } = createGraphData(input);
    return mappedArray.reduce((acc, row) => {
        row.forEach(({ l, x, y }) => {
            if (l === 'a') {
                acc.push({ x, y });
            }
        })
        return acc;
    }, []);
}

function getAnswer2(input) {
    const arrayOfAs = getAllACoords(input);
    const answerArray = arrayOfAs.map(aCoords => {
        const { mappedArray, eCoord } = createGraphData(input);
        const graphWithConnections = setConnections(mappedArray);
        const answer = aStar(graphWithConnections, aCoords, eCoord);
        return answer.length - 1;
    })
    return answerArray.filter(num => num > 0).reduce((acc, curr) => acc > curr ? curr : acc);
}
// Part 1 success!
const answer1 = getAnswer1(input);
const answer2 = getAnswer2(input);
console.log('Answer 1:', answer1);

console.log(answer2);
console.log(input.length)

// console.log(getAllACoords(sample));
