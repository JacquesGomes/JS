let x = 5
const max = x - 2
let y = "Hello"
x = 10
console.log("Hello world!", x, x, y, y);
console.log(max);
alert("Hello world!");

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  if (name == "jacques") {
    alert("Not again!");
  }
  else if(name == "jacques1"){
    alert("You dont fool yourself");
  }
  else{
    alert("Glad to see you");
  }
}

button.addEventListener("click", greet);