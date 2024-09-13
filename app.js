    //USER INPUT & CONDITIONAL STATEMENT

  //1.
  var city = prompt("Enter your city name");

  if(city === "karachi"){
      alert("Welcome to city of lights!");
  }
  else{
      alert("come karachi");
  }
  
    //2.
  var gender = prompt("Enter your Gender");
  
  if(gender === "male"){
      alert("Good morning Sir!")
  }
  else if(gender === "female"){
      alert("Good morning ma'am!");
  }
  else{
      alert("Incorrect value..");
  }
  
    //3.
  
  
    //4.
  var fuel = prompt("Enter your fuel in litres?");
  if(fuel < 0.25){
      alert("Please refill the fuel in your car");
  }
  else{
      alert("invalid fuel");
  }
  
    //5.
  //a).
  var a = 4;
  if(++a === 5){
      alert("given condition for variable a is true");
  }
  //b).
  var b = 82;
  if(b++ === 83){
      alert("given condition for variable b is true");
  }
  //c).
  var c = 12;
  if(c++ === 13){
      alert("condition 1 is true");
  }
  if(c === 13){
      alert("condition 2 is true");
  }
  if(++c < 14){
      alert("condition 3 is true");
  }
  if(c === 14){
      alert("condition 4 is true");
  }
  //d).
  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if(totalCost === laborCost + materialCost){
      alert("The cost equals");
  }
  //e).
  if(true){
      alert("True");
  }
  if(false){
      alert("False");
  }
  //f).
  if("car" < "cat"){
      alert("car is smaller than cat");
  }
  
    //6.
  // Function to calculate grade based on percentage
  function calculateGrade(percentage) {
      if (percentage >= 90) {
          return "A+";
      } else if (percentage >= 80) {
          return "A";
      } else if (percentage >= 70) {
          return "B";
      } else if (percentage >= 60) {
          return "C";
      } else if (percentage >= 50) {
          return "D";
      } else {
          return "Fail";
      }
  }
  
  // Input marks for three subjects and total marks
  let subject1 = parseInt(prompt("Enter marks obtained in subject 1:"));
  let subject2 = parseInt(prompt("Enter marks obtained in subject 2:"));
  let subject3 = parseInt(prompt("Enter marks obtained in subject 3:"));
  let totalMarks = parseInt(prompt("Enter total marks:"));
  
  // Calculate total marks obtained
  let totalObtainedMarks = subject1 + subject2 + subject3;
  
  // Calculate percentage
  let percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
  
  // Calculate grade
  let grade = calculateGrade(percentage);
  
  // Determine remarks
  let remarks = (grade === "Fail") ? "Sorry, you have failed." : "Congratulations! You passed.";
  
  // Display results
  document.write("<h1>Marks Sheet</h1> ")
  document.write("\nTotal Marks: " + 3 * totalMarks + "<br>");
  document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "% <br>");
  document.write("Grade: " + grade + "<br>");
  document.write("Remarks: " + remarks);
  
    //7.
  
    // Store the secret number (1 to 10)
  let secretNumber = Math.floor(Math.random() * 10) + 1;
    
    // Prompt user to guess the secret number
  let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    
    // Check the user's guess
  if (userGuess === secretNumber) {
      alert("Bingo! Correct answer 🎉");
    } 
  else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
      alert("Close enough to the correct answer! Almost there 😉");
    } 
  else {
      alert("Oops! Wrong guess 😔 The secret number was: " + secretNumber);
    }
  
    //8.
  // Function to check if a number is divisible by 3
  function checkDivisibilityBy3(number) {
      if (number % 3 === 0) {
          alert(number + " is divisible by 3");
      } 
      else {
          alert(number + " is not divisible by 3");
      }
  }
  
  // Example usage
  var userInput = prompt("Enter a number to check if it is divisible by 3:");
  userInput = parseInt(userInput, 10);
  
  // Call the function to check the input
  checkDivisibilityBy3(userInput);
  
    //9.
  // Function to check if a number is even or odd
  function checkEvenOdd(number) {
      if (number % 2 === 0) {
          alert(number + " is an even number");
      } 
      else {
          alert(number + " is an odd number");
      }
  }
  
  // Example usage
  var userInput = prompt("Enter a number to check if it is even or odd:");
  userInput = parseInt(userInput, 10);
  
  // Call the function to check if the input is even or odd
  checkEvenOdd(userInput);
  
    //10.
  // Function to display message based on temperature
  function checkTemperature(temp) {
      if (temp > 40) {
          alert("It is too hot outside.");
      } 
      else if (temp > 30) {
          alert("The Weather today is Normal.");
      } 
      else if (temp > 20) {
          alert("Today’s Weather is cool.");
      } 
      else if (temp > 10) {
          alert("OMG! Today’s weather is so Cool.");
      } 
      else {
          alert("It’s freezing cold!");
      }
  }
  
  // Example usage
  var userInput = prompt("Enter the temperature:");
  userInput = parseFloat(userInput);
  
  // Call the function to check the temperature
  checkTemperature(userInput);
  
    //11.
  // Function to perform the calculator operations
  function calculate(num1, num2, operation) {
      if (operation === '+') {
          console.log("Result: " + (num1 + num2));
      } 
      else if (operation === '-') {
          console.log("Result: " + (num1 - num2));
      } 
      else if (operation === '*') {
          console.log("Result: " + (num1 * num2));
      } 
      else if (operation === '/') {
          if (num2 === 0) {
              console.log("Error: Division by zero is not allowed.");
          } else {
              console.log("Result: " + (num1 / num2));
          }
      } 
      else if (operation === '%') {
          if (num2 === 0) {
              console.log("Error: Modulus by zero is not allowed.");
          } else {
              console.log("Result: " + (num1 % num2));
          }
      } 
      else {
          console.log("Error: Invalid operation. Please enter +, -, *, /, or %.");
      }
  }
  
  // Example usage
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operation = prompt("Enter the operation (+, -, *, /, %):");
  
  // Call the function to calculate the result
  calculate(num1, num2, operation);
  