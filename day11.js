const input = {
    monkey0: {
        startingItems: [98, 70, 75, 80, 84, 89, 55, 98],
        operation: (worry) => worry * 2,
        test: {
            divisibleBy: 11,
            true: 'monkey1',
            false: 'monkey4'
        }
    },

    monkey1: {
        startingItems: [59],
        operation: (worry) => worry * worry,
        test: {
            divisibleBy: 19,
            true: 'monkey7',
            false: 'monkey3'
        }
    },

    monkey2: {
        startingItems: [77, 95, 54, 65, 89],
        operation: (worry) => worry + 6,
        test: {
            divisibleBy: 7,
            true: 'monkey0',
            false: 'monkey5'
        }
    },

    monkey3: {
        startingItems: [71, 64, 75],
        operation: (worry) => worry + 2,
        test: {
            divisibleBy: 17,
            true: 'monkey6',
            false: 'monkey2'
        }
    },

    monkey4: {
        startingItems: [74, 55, 87, 98],
        operation: (worry) => worry * 11,
        test: {
            divisibleBy: 3,
            true: 'monkey1',
            false: 'monkey7'
        }
    },

    monkey5: {
        startingItems: [90, 98, 85, 52, 91, 60],
        operation: (worry) => worry + 7,
        test: {
            divisibleBy: 5,
            true: 'monkey0',
            false: 'monkey4'
        }
    },

    monkey6: {
        startingItems: [99, 51],
        operation: (worry) => worry + 1,
        test: {
            divisibleBy: 13,
            true: 'monkey5',
            false: 'monkey2'
        }
    },

    monkey7: {
        startingItems: [98, 94, 59, 76, 51, 65, 75],
        operation: (worry) => worry + 5,
        test: {
            divisibleBy: 2,
            true: 'monkey3',
            false: 'monkey6'
        }
    }
}

const sample = {
    monkey0: {
        startingItems: [79, 98],
        operation: (worry) => { return worry * 19 },
        test: {
            divisibleBy: 23,
            true: "monkey2",
            false: "monkey3"
        }
    },

    monkey1: {
        startingItems: [54, 65, 75, 74],
        operation: (worry) => { return worry + 6 },
        test: {
            divisibleBy: 19,
            true: "monkey2",
            false: "monkey0"
        }
    },

    monkey2: {
        startingItems: [79, 60, 97],
        operation: (worry) => { return worry * worry },
        test: {
            divisibleBy: 13,
            true: "monkey1",
            false: "monkey3"
        }
    },

    monkey3: {
        startingItems: [74],
        operation: (worry) => { return worry + 3 },
        test: {
            divisibleBy: 17,
            true: "monkey0",
            false: "monkey1"
        }
    }
}


// starting items is the worry level, and the order they will be inspected.
// operation is your worry level change when monkey inspects
// test shows how the monkey will decide where to throw

// after a monkey inspects, but before the monkey throws
// worry / 3 rounded down.

// On a monkeys turn
// monkey will inspect and throw each item held.
// when an item is thrown, it goes to the end of the recieving monkeys inspection list
// if monkey has no items, its turn ends


// 20 rounds, 2 most active monkeys, number of items inspected * each other
function gcd(a, b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

function getlcm(arr) {
    const n = arr.length
    let ans = arr[0];

    // ans contains LCM of arr[0], ..arr[i]
    // after i'th iteration,
    for (let i = 1; i < n; i++)
        ans = (((arr[i] * ans)) /
            (gcd(arr[i], ans)));

    return ans;
}

function monkeyBusiness(monkeys, rounds) {
    const monkeyState = { ...monkeys };
    const monKEYS = Object.keys(monkeyState);
    monKEYS.forEach(monKEY => monkeyState[monKEY].inspectedCount = 0);
    const dividers = monKEYS.map(key => monkeyState[key].test.divisibleBy);

    const lcm = getlcm(dividers);
    console.log(lcm);

    function processRelief(worry) {
        // Pt 1
        // return Math.floor(worry / 3);
        return Math.floor(worry % lcm);
    }

    function handleMonkey(monkey) {
        while (monkey.startingItems.length > 0) {
            const worry = monkey.startingItems.shift();
            const inspectedWorry = monkey.operation(worry);
            const afterRelief = processRelief(inspectedWorry);
            const passesTest = afterRelief % monkey.test.divisibleBy === 0;
            const monkeyToThrowTo = passesTest ? monkey.test.true : monkey.test.false;
            monkeyState[monkeyToThrowTo].startingItems.push(afterRelief);
            monkey.inspectedCount++
        }
    }
    for (let i = 0; i < rounds; i++) {
        monKEYS.forEach(monKEY => handleMonkey(monkeyState[monKEY]))
    }
    return monkeyState;
}

const monkeyResults = monkeyBusiness(input, 10000);
const order = Object.keys(monkeyResults)
    .map(monkey => monkeyResults[monkey].inspectedCount)
    .sort((a, b) => b - a);
const totalMonkeyBusiness = order[0] * order[1];
console.log(totalMonkeyBusiness);