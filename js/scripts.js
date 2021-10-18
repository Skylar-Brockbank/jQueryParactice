$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a heading.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $("#add").click(function() { 
    alert(add(parseInt(prompt("enter your first number")), parseInt(prompt("enter the number you'd like added"))));
  });

  $("#sub").click(function() { 
    alert(subtract(parseInt(prompt("enter your first number")), parseInt(prompt("subtracted by"))));
  });

  $("#mult").click(function() { 
    alert(multiply(parseInt(prompt("enter your first number")), parseInt(prompt("multiplied by"))));
  });

  $("#divi").click(function() { 
    alert(divide(parseInt(prompt("enter your first number")), parseInt(prompt("divided by"))));
  });

  function add(number1, number2){
    return number1+number2;
  }
  
  function subtract(number1, number2){
    return number1-number2;
  }

  function multiply(number1, number2){
    return number1*number2;
  }
  
  function divide(number1, number2){
    return number1/number2;
  }

});

