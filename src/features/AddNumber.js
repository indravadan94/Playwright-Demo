const {Given,When,Then} = require('@cucumber/cucumber')

Given('Numbers are provided', function () {
 num1 = 5;
 num2 = 10;
    return console.log("Numbers are : "+ num1+" "+ "and" +" "+ num2);
  });



  When('Sum up both numbers here', function () {
    sum = num1 + num2
    return console.log("Addition is Performed");;
  });



  Then('Display sum of numbers', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Sum of numbers are: "+ sum);
  });