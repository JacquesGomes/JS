
const button = document.querySelector("#hi");

 function greet (nome){
    alert("hi " + nome);
 }

const ola = prompt("Insert name");

button.addEventListener("click", function(){
    greet(ola);
});
