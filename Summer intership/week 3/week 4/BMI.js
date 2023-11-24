/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

a. Store Mark's and John's mass and height in variables
b. Calculate both their BMIs
c. Create a boolean variable containing information about whether Mark has a higher BMI than John.
d. Print a string to the console containing the variable from step 3  (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
 let mass = prompt('Mark input your mass (in Kg)');
console.log('Your mass is ',mass);
let cm = prompt('Mark input your height (in cm)');
let height = cm / 100;
console.log('Your height is ',height);
let BMI = mass / (height * height);
console.log('John your BMI is ',BMI);


let mass2 = prompt('John input your mass(in Kg)');
console.log(' John your mass is ',mass2);
let cm2 = prompt('John input your height (in cm)');
let height2 = cm2 / 100;
console.log('John your height is ',height2);
let BMI2 = mass2 / (height2 * height2);
console.log('John your BMI is ',BMI2);
let boolean = BMI > BMI2;
console.log('Is Marks BMI higher than Johns?', boolean);



