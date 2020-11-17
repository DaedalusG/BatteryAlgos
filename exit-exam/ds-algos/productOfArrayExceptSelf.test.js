const productOfArrayExceptSelf = require("./productOfArrayExceptSelf");
const productExceptSelf = require("./productOfArrayExceptSelf");

test("outputs the correct answer with input [1,2,3,4]", () => {
  let input = [1, 2, 3, 4];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([24, 12, 8, 6]);
});

test("outputs the correct answer with input [21,-2,30,4]", () => {
  let input = [21, -2, 30, 4];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([-240, 2520, -168, -1260]);
});

test("outputs the correct answer with input [2,5,7,4,11,1,1,3]", () => {
  let input = [2, 5, 7, 4, 11, 1, 1, 3];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([4620, 1848, 1320, 2310, 840, 9240, 9240, 3080]);
});

test("outputs the correct answer with input [1,1,1,1,1,1]", () => {
  let input = [1, 1, 1, 1, 1, 1];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([1, 1, 1, 1, 1, 1]);
});

test("outputs the correct answer with input [24,12,8,6]", () => {
  let input = [24, 12, 8, 6];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([576, 1152, 1728, 2304]);
});

test("outputs the correct answer with input [9,1,0,6,2,3,5]", () => {
  let input = [9, 1, 0, 6, 2, 3, 5];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([0, 0, 1620, 0, 0, 0, 0]);
});

test("outputs the correct answer with input [-1,-2,-3,-4,-5,-6]", () => {
  let input = [-1, -2, -3, -4, -5, -6];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([-720, -360, -240, -180, -144, -120]);
});

test("outputs the correct answer with input [-1,-2,-3,-4,-5,-6,-7]", () => {
  let input = [-1, -2, -3, -4, -5, -6, -7];
  let answer = productExceptSelf(input);
  expect(answer).toEqual([5040, 2520, 1680, 1260, 1008, 840, 720]);
});
