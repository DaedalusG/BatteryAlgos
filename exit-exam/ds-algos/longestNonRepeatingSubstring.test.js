const longestNonRepeatingSubstring = require("./longestNonRepeatingSubstring");

test('outputs correct answer with an input of abcabcbb', () =>{
    const input = 'abcabcbb';
    const answer = longestNonRepeatingSubstring(input);
    expect(answer).toEqual(3);
})

test('outputs correct answer with an input of bbbbbb', () =>{
    const input = 'bbbbbb';
    const answer = longestNonRepeatingSubstring(input);
    expect(answer).toEqual(1);
})

test('outputs correct answer with an input of pwwkew', () =>{
    const input = 'pwwkew';
    const answer = longestNonRepeatingSubstring(input);
    expect(answer).toEqual(3);
})

test('outputs correct answer with an input of an empty string', () =>{
    const input = '';
    const answer = longestNonRepeatingSubstring(input);
    expect(answer).toEqual(0);
})