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

const { mappedArray, sCoord, eCoord } = createGraphData(input);

function heuristic(position0, position1) {
    let d1 = Math.abs(position1.x - position0.x);
    let d2 = Math.abs(position1.y - position0.y);
    return d1 + d2;
}

function canMove(location, destination) {
    if (location.height + 1 >= destination.height) return true;
    return false;
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

const graphWithConnections = setConnections(mappedArray);

function aStar(tree, start, end) {
    let openList = [];
    let closedList = [];
    let path = [];
    const startItem = tree[start.y][start.x];
    const endItem = tree[end.y][end.x];
    // Set starting point
    openList.push(startItem);

    while (openList.length > 0) {
        let lowestIndex = 0;

        for (let i = 0; i < openList.length; i++) {
            if (openList[i].f < openList[lowestIndex].f) {
                lowestIndex = i;
            }
        };
        let current = openList[lowestIndex];

        if (current === endItem) {
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
    return [];
}

const answer = aStar(graphWithConnections, sCoord, eCoord);
const mappedPath = answer.map(point => [point.y, point.x]);
console.log(mappedPath);
console.log(answer.length - 1);