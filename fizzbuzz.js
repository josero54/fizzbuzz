    function fizzbuzz() {
        let answer = parseInt(prompt("Welcome to the FizzBuzz Game. Please enter an integer number to fizzbuzz up to: "));
        if (Number.isInteger(answer)) {
            let text = document.querySelector(".text");
            let result = "";

            for (let i = 1; i <= answer; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result += "FizzBuzz";
                } else if (i % 3 === 0) {
                    result += "Fizz";
                } else if (i % 5 === 0) {
                    result += "Buzz";
                } else {
                    result += i;
                }
                result += "<br>"; // Add a line break after each item
            }

            text.innerHTML = result; // Set the innerHTML once, after the loop
        } else {
            text.innerHTML = "Please Enter an Integer number";
        }
    }

    document.addEventListener("DOMContentLoaded", fizzbuzz);