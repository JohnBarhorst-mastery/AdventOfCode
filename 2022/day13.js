const sample = [
    {
        left: [1, 1, 3, 1, 1],
        right: [1, 1, 5, 1, 1]
    },

    {
        left: [[1], [2, 3, 4]],
        right: [[1], 4]
    },

    {
        left: [9],
        right: [[8, 7, 6]]
    },

    {
        left: [[4, 4], 4, 4],
        right: [[4, 4], 4, 4, 4]
    },

    {
        left: [7, 7, 7, 7],
        right: [7, 7, 7]
    },

    {
        left: [],
        right: [3]
    },

    {
        left: [[[]]],
        right: [[]]
    },

    {
        left: [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
        right: [1, [2, [3, [4, [5, 6, 0]]]], 8, 9]
    }
]

// Comparison
// Once a difference is found, order can be determined
// If both are int, left < right
// if equal, continue on to next item
// if both are arrays, compare each item based on rules above
// However if they are not the same length, left should be shorter
// While left should be shorter, still need to check that all of right are bigger or = to left
// If one value is an array, and the other is not, the one that is not should be converted to an array before comparison

// once determining if it is in order or not, track the index of the CORRECT ones, starting at 1, not 0
// Answer is sum of all correct indices.

const arrayOrInt = item => Array.isArray(item) ? 'array' : 'int';

function handlePacketPair(left, right) {
    if (!left) return true;
    if (!right) return false;

    const typeOfLeft = arrayOrInt(left);
    const typeOfRight = arrayOrInt(right);
    const bothAreInts = typeOfLeft === 'int' && typeOfRight === 'int';
    const bothAreArrays = typeOfLeft === 'array' && typeOfRight === 'array';

    if (bothAreArrays) {

    }

    if (bothAreInts) {
        if (left < right) return true;
        if (left > right) return false;
    }


}




function getAnswer1(input) {
    // iterate over input
    // assign left and right
    input.map(({ left, right }, i) => {
        const isCorrectOrder = handlePacketPair(left, right);
        const index = i + 1;
        return {
            isCorrectOrder,
            index
        }
    })
    // apply any transformations
    // compare left and right against rules
    // determine order or process next item in each.
}

const small = {
    left: [[4, 4], 4, 4],
    right: [[4, 4], 4, 4, 4]
}


