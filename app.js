console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i++) {
    if (i % 2){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i = 1; i <= 100; i++){
    if(!(i % 3) && !(i % 5)){
        console.log(i + " FIZZBUZZ");
    }

    else if(!(i % 3)){
        console.log(i + " FIZZ");
    }

    else if(!(i % 5)){
        console.log(i + " BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// while loop for exercise 1
i = 0;
while (i <= 100){
    if (i % 2){
        console.log(i);
    }
    i++;
}

// do/while loop for exercise 1
i = 0;
do {
    if (i % 2){
        console.log(i);
    }
    i++;
} while (i <= 100);

// while loop for exercise 2
i = 0;
while (i <= 100){
    if(!(i % 3) && !(i % 5)){
        console.log(i + " FIZZBUZZ");
    }

    else if(!(i % 3)){
        console.log(i + " FIZZ");
    }

    else if(!(i % 5)){
        console.log(i + " BUZZ");
    }
    i++;
}

// do/while loop for exercise 2
i = 0;
do {
    if(!(i % 3) && !(i % 5)){
        console.log(i + " FIZZBUZZ");
    }

    else if(!(i % 3)){
        console.log(i + " FIZZ");
    }

    else if(!(i % 5)){
        console.log(i + " BUZZ");
    }
    i++;
} while( i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log("Searching for " + value + ", iterating " + n + " times...");

for(i = 0; i <= n; i++){
    if (i == value){
        console.log("Found value!");
        break;
    }

    if (i == n){
        console.log("Did not find value");
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(i = start; i <= n; i++){
    if(!(i % fizzDivisor) && !(i % buzzDivisor)){
        console.log(i + " FIZZBUZZ");
    }

    else if(!(i % fizzDivisor)){
        console.log(i + " FIZZ");
    }

    else if(!(i % buzzDivisor)){
        console.log(i + " BUZZ");
    }
}