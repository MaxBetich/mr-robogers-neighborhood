Describe:  positiveBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: positiveBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: negativeBoop()

Test: "It should return an array of negative numbers from 0 to the user's inputted number"
Code: negativeBoop(-5);
Expected Output: [0, -1, -2, -3, -4, -5]

Describe: boopFilter()

Test: "It should return an appropriate array based on whether the user's number was positive or negative"
Code: boopFilter(-5);
Expected Output: [0, -1, -2, -3, -4, -5]
Code: boopFilter(5);
ExpectedOutput: [0, 1, 2, 3, 4, 5]

Describe: roboTranslator()

Test: "It should replace each '1' element of the inputted number array with 'Beep!'"
Code: roboTranslator(5);
Expected Output: [0, 'Beep!', 2, 3, 4, 5]