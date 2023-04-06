Describe:  positiveBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: positiveBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: negativeBoop()

Test: "It should return an array of negative numbers from 0 to the user's inputted number"
Code: negativeBoop(-5);
Expected Output: [0, -1, -2, -3, -4, -5]

Describe: boopFilter()

Test: "It should return an array of positive numbers when the user enters a positive number"
Code: boopFilter(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of negative numbers  when  the user enters a negative number"
Code: boopFilter(-5);
ExpectedOutput: [0, -1, -2, -3, -4, -5]

Describe: roboTranslator()

Test: "It should replace each '1' element of the inputted number array with 'Beep!'"
Code: roboTranslator(5);
Expected Output: [0, 'Beep!', 2, 3, 4, 5]

Test: "It should replace elements of the inputted array that contain a '2' with 'Boop!'"
Code: roboTranslator(5);
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5]

Test: "It should replace elements of the inputted array that contain a '3' with 'Won't you be my neighbor?'"
Code: robotranslator(5);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]