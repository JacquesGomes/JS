let numero = parseInt(prompt("Please enter a number: "));

for(let i = 1; i <= numero; i++) {
    if(i % 3 === 0){
        console.log("Fizz buzz");
    }
    else{
        console.log(i);
    }
}