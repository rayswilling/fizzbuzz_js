function fizzBuzz(number) {
    if (number <= 0 || number > 100) {
        return "Error, choose again"; 
    } 
    if (number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

for (var number = 1; number <= 100; number++) {
    console.log(fizzBuzz(number));
}