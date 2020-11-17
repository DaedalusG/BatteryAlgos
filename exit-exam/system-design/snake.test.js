const Snake = require("./snake");
const { test, expect } = global;

test("outputs the correct answer with a 3x2 grid", () => {
  let food = [
    [1, 2],
    [0, 1],
  ];
  let viewHeight = 3;
  let viewWidth = 2;

  let newGame = new Snake(viewHeight, viewWidth, food);
  let moves = ["R", "D", "R", "U", "L", "U"];
  let answer = [];

  for (let i = 0; i < moves.length; i++) {
    let direction = moves[i];
    let result = newGame.move(direction);
    answer.push(result);
  }
  expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
});

test("outputs the correct answer with a 5x5 grid", () => {
  let food = [
    [1, 2],
    [0, 2],
    [2, 2],
  ];
  let viewHeight = 5;
  let viewWidth = 5;
  let newGame = new Snake(viewHeight, viewWidth, food);
  let moves = ["R", "D", "R", "U", "L", "D", "R"];
  let answer = [];
  for (let i = 0; i < moves.length; i++) {
    let direction = moves[i];
    let result = newGame.move(direction);
    answer.push(result);
  }
  expect(answer).toEqual([0, 0, 1, 2, 2, 2, 2]);
});

test("outputs the correct answer with a 2x2 grid", () => {
  let newGame = new Snake(2, 2, [[0, 1]]);
  let moves = ["R", "D"];
  let answer = [];
  for (let i = 0; i < moves.length; i++) {
    let direction = moves[i];
    let result = newGame.move(direction);
    answer.push(result);
  }
  expect(answer).toEqual([1, 1]);
});

test("outputs the correct answer for a 1x1 grid", () => {
  let newGame = new Snake(1, 1, []);
  let moves = ["R"];
  let answer = [];
  for (let i = 0; i < moves.length; i++) {
    let direction = moves[i];
    let result = newGame.move(direction);
    answer.push(result);
  }
  expect(answer).toEqual([-1]);
});
test("outputs the correct answer", () => {
  let newGame = new Snake(3, 3, [
    [2, 0],
    [0, 0],
    [0, 2],
    [0, 1],
    [2, 2],
    [0, 1],
  ]);
  let moves = [
    "D",
    "D",
    "R",
    "U",
    "U",
    "L",
    "D",
    "R",
    "R",
    "U",
    "L",
    "L",
    "D",
    "R",
    "U",
  ];
  let answer = [];
  for (let i = 0; i < moves.length; i++) {
    let direction = moves[i];
    let result = newGame.move(direction);
    answer.push(result);
  }
  expect(answer).toEqual([0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, -1]);
});
// test("outputs the correct answer", () => {
//   let newGame = new Snake(3, 2, [
//     [1, 2],
//     [0, 1],
//   ]);
//   let moves = ["R", "D", "R", "U", "L", "U"];
//   let answer = [];
//   for (let i = 0; i < moves.length; i++) {
//     let direction = moves[i];
//     let result = newGame.move(direction);
//     answer.push(result);
//   }
//   expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
// });
// test("outputs the correct answer", () => {
//   let newGame = new Snake(3, 2, [
//     [1, 2],
//     [0, 1],
//   ]);
//   let moves = ["R", "D", "R", "U", "L", "U"];
//   let answer = [];
//   for (let i = 0; i < moves.length; i++) {
//     let direction = moves[i];
//     let result = newGame.move(direction);
//     answer.push(result);
//   }
//   expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
// });
// test("outputs the correct answer", () => {
//   let newGame = new Snake(3, 2, [
//     [1, 2],
//     [0, 1],
//   ]);
//   let moves = ["R", "D", "R", "U", "L", "U"];
//   let answer = [];
//   for (let i = 0; i < moves.length; i++) {
//     let direction = moves[i];
//     let result = newGame.move(direction);
//     answer.push(result);
//   }
//   expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
// });
// test("outputs the correct answer", () => {
//   let newGame = new Snake(3, 2, [
//     [1, 2],
//     [0, 1],
//   ]);
//   let moves = ["R", "D", "R", "U", "L", "U"];
//   let answer = [];
//   for (let i = 0; i < moves.length; i++) {
//     let direction = moves[i];
//     let result = newGame.move(direction);
//     answer.push(result);
//   }
//   expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
// });
// test("outputs the correct answer", () => {
//   let newGame = new Snake(3, 2, [
//     [1, 2],
//     [0, 1],
//   ]);
//   let moves = ["R", "D", "R", "U", "L", "U"];
//   let answer = [];
//   for (let i = 0; i < moves.length; i++) {
//     let direction = moves[i];
//     let result = newGame.move(direction);
//     answer.push(result);
//   }
//   expect(answer).toEqual([0, 0, 1, 1, 2, -1]);
// });
