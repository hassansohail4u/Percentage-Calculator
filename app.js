var fullName = prompt("Enter Your Full Name");
console.log(fullName,"Enter Your Marks for Percentage");
console.log("Best of Luck!")
var englishMarks = Number(prompt("Enter Your English Marks"));
console.log("English Marks are",englishMarks);
var chemistryMarks = Number(prompt("Enter Your Chemistry Marks"));
console.log("Chemistry Marks are",chemistryMarks);
var physicsMarks = Number(prompt("Enter Your Physics Marks"));
console.log("Physics Marks are",physicsMarks);
var mathsMarks = Number(prompt("Enter Your Maths Marks"));
console.log("Maths Marks are",mathsMarks);
var urduMarks = Number(prompt("Enter Your Urdu Marks"));
console.log("Urdu Marks are",urduMarks);

var obtainMarks = englishMarks + chemistryMarks + physicsMarks + mathsMarks + urduMarks;
var totalnumber = 500;
var percentage = (obtainMarks/totalnumber)*100;

console.log(fullName,"Your Obtained Marks are",obtainMarks);
console.log("Total Numbers are",totalnumber)
console.log(fullName,"Your Percentage are",percentage,"%")