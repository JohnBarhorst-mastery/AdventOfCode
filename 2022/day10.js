const jsonfile = require('jsonfile');

const input = [
    "noop",
    "noop",
    "noop",
    "addx 3",
    "addx 7",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx 6",
    "noop",
    "addx -1",
    "noop",
    "addx 5",
    "addx 1",
    "noop",
    "addx 4",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx 6",
    "addx -1",
    "noop",
    "addx 3",
    "addx -13",
    "addx -22",
    "noop",
    "noop",
    "addx 3",
    "addx 2",
    "addx 11",
    "addx -4",
    "addx 11",
    "addx -10",
    "addx 2",
    "addx 5",
    "addx 2",
    "addx -2",
    "noop",
    "addx 7",
    "addx 3",
    "addx -2",
    "addx 2",
    "addx 5",
    "addx 2",
    "addx -2",
    "addx -8",
    "addx -27",
    "addx 5",
    "addx 2",
    "addx 21",
    "addx -21",
    "addx 3",
    "addx 5",
    "addx 2",
    "addx -3",
    "addx 4",
    "addx 3",
    "addx 1",
    "addx 5",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx 3",
    "addx 1",
    "addx 6",
    "addx -31",
    "noop",
    "addx -4",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx 3",
    "addx 7",
    "noop",
    "addx -1",
    "addx 1",
    "addx 5",
    "noop",
    "addx 1",
    "noop",
    "addx 2",
    "addx -8",
    "addx 15",
    "addx 3",
    "noop",
    "addx 2",
    "addx 5",
    "noop",
    "noop",
    "noop",
    "addx -28",
    "addx 11",
    "addx -20",
    "noop",
    "addx 7",
    "addx -2",
    "addx 7",
    "noop",
    "addx -2",
    "noop",
    "addx -6",
    "addx 11",
    "noop",
    "addx 3",
    "addx 2",
    "noop",
    "noop",
    "addx 7",
    "addx 3",
    "addx -2",
    "addx 2",
    "addx 5",
    "addx 2",
    "addx -16",
    "addx -10",
    "addx -11",
    "addx 27",
    "addx -20",
    "noop",
    "addx 2",
    "addx 3",
    "addx 5",
    "noop",
    "noop",
    "noop",
    "addx 3",
    "addx -2",
    "addx 2",
    "noop",
    "addx -14",
    "addx 21",
    "noop",
    "addx -6",
    "addx 12",
    "noop",
    "addx -21",
    "addx 24",
    "addx 2",
    "noop",
    "noop",
    "noop"
];



const sample = [
    "addx 15",
    "addx -11",
    "addx 6",
    "addx -3",
    "addx 5",
    "addx -1",
    "addx -8",
    "addx 13",
    "addx 4",
    "noop",
    "addx -1",
    "addx 5",
    "addx -1",
    "addx 5",
    "addx -1",
    "addx 5",
    "addx -1",
    "addx 5",
    "addx -1",
    "addx -35",
    "addx 1",
    "addx 24",
    "addx -19",
    "addx 1",
    "addx 16",
    "addx -11",
    "noop",
    "noop",
    "addx 21",
    "addx -15",
    "noop",
    "noop",
    "addx -3",
    "addx 9",
    "addx 1",
    "addx -3",
    "addx 8",
    "addx 1",
    "addx 5",
    "noop",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx -36",
    "noop",
    "addx 1",
    "addx 7",
    "noop",
    "noop",
    "noop",
    "addx 2",
    "addx 6",
    "noop",
    "noop",
    "noop",
    "noop",
    "noop",
    "addx 1",
    "noop",
    "noop",
    "addx 7",
    "addx 1",
    "noop",
    "addx -13",
    "addx 13",
    "addx 7",
    "noop",
    "addx 1",
    "addx -33",
    "noop",
    "noop",
    "noop",
    "addx 2",
    "noop",
    "noop",
    "noop",
    "addx 8",
    "noop",
    "addx -1",
    "addx 2",
    "addx 1",
    "noop",
    "addx 17",
    "addx -9",
    "addx 1",
    "addx 1",
    "addx -3",
    "addx 11",
    "noop",
    "noop",
    "addx 1",
    "noop",
    "addx 1",
    "noop",
    "noop",
    "addx -13",
    "addx -19",
    "addx 1",
    "addx 3",
    "addx 26",
    "addx -30",
    "addx 12",
    "addx -1",
    "addx 3",
    "addx 1",
    "noop",
    "noop",
    "noop",
    "addx -9",
    "addx 18",
    "addx 1",
    "addx 2",
    "noop",
    "noop",
    "addx 9",
    "noop",
    "noop",
    "noop",
    "addx -1",
    "addx 2",
    "addx -37",
    "addx 1",
    "addx 3",
    "noop",
    "addx 15",
    "addx -21",
    "addx 22",
    "addx -6",
    "addx 1",
    "noop",
    "addx 2",
    "addx 1",
    "noop",
    "addx -10",
    "noop",
    "noop",
    "addx 20",
    "addx 1",
    "addx 2",
    "addx 2",
    "addx -6",
    "addx -11",
    "noop",
    "noop",
    "noop"
];

// CPU register x starts with one
// addx V takes 2 cycles to complete
// After 2 cycles, x is increased by V
// noop takes 1 cycle, has no effect.
// Consider the following small program:

// noop
// addx 3
// addx -5
// Execution of this program proceeds as follows:

// At the start of the first cycle, the noop instruction begins execution. During the first cycle, X is 1. After the first cycle, the noop instruction finishes execution, doing nothing.
// At the start of the second cycle, the addx 3 instruction begins execution. During the second cycle, X is still 1.
// During the third cycle, X is still 1. After the third cycle, the addx 3 instruction finishes execution, setting X to 4.
// At the start of the fourth cycle, the addx -5 instruction begins execution. During the fourth cycle, X is still 4.
// During the fifth cycle, X is still 4. After the fifth cycle, the addx -5 instruction finishes execution, setting X to -1.

// signal strength = cycle x register value.
// 20th, then every 40 after.

// The interesting signal strengths can be determined as follows:

// During the 20th cycle, register X has the value 21, so the signal strength is 20 * 21 = 420. (The 20th cycle occurs in the middle of the second addx -1, so the value of register X is the starting value, 1, plus all of the other addx values up to that point: 1 + 15 - 11 + 6 - 3 + 5 - 1 - 8 + 13 + 4 = 21.)
// During the 60th cycle, register X has the value 19, so the signal strength is 60 * 19 = 1140.
// During the 100th cycle, register X has the value 18, so the signal strength is 100 * 18 = 1800.
// During the 140th cycle, register X has the value 21, so the signal strength is 140 * 21 = 2940.
// During the 180th cycle, register X has the value 16, so the signal strength is 180 * 16 = 2880.
// During the 220th cycle, register X has the value 18, so the signal strength is 220 * 18 = 3960.
// The sum of these signal strengths is 13140.



function runProgram(inputs) {
    const logCycles = [20, 60, 100, 140, 180, 220];
    const state = {
        registerX: 1,
        cycle: 0,
        tasks: [],
        strengthLog: [],
        xLog: [],
        pixelRow: 0,
        pixels: {}
    }

    function handlePixelWrite() {
        // 0-39, 6 times.
        // 40 pixels per row.
        const writePosition = state.cycle - (40 * state.pixelRow) - 1;
        const shouldWrite = state.registerX === writePosition ||
            state.registerX === writePosition + 1 ||
            state.registerX === writePosition - 1;
        state.pixels[state.pixelRow].push(`${shouldWrite ? '#' : '.'}`);

    }

    function handleCycle(task) {
        state.cycle = state.cycle + 1;
        if (logCycles.includes(state.cycle)) {
            state.strengthLog.push(state.cycle * state.registerX);
        }
        state.xLog.push(state.registerX);

        if (!state.pixels[state.pixelRow]) state.pixels[state.pixelRow] = [];
        handlePixelWrite();
        if (state.cycle % 40 === 0) state.pixelRow = state.pixelRow + 1;

        if (task !== 'addx' && task !== 'noop') {
            const value = parseInt(task);
            state.registerX = state.registerX + value;
        }

    }

    function handleCommand(input) {
        const tasks = input.split(' ');
        state.tasks.push(...tasks);
        state.tasks.forEach(task => handleCycle(task));
        state.tasks = [];
    }

    inputs.forEach(input => handleCommand(input));

    return state;
}

const answers = runProgram(input);
// Part 2

// xRegister is the middle pixel, sprite is 3 pixels wide
// 6 rows, 40 each
// 0 - 39
// 1 pixel per cycle
// light pixel = #, dark = .

jsonfile.writeFile('day10.json', answers.pixels, { flag: 'a' }, (err) => {
    if (err) console.log(err)
});