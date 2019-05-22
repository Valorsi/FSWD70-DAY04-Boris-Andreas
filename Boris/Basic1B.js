function AgeCalc(birthyear){ 
var date = new Date()
var current = date.getFullYear();
var result = current - birthyear;
console.log("your age is " + result)

 }

 AgeCalc(1995);