var target;
var guess_input;
var guess_input_text;
var finished = false;
var guesses = 0;
function game(){
    var random_num = Math.random() * 100;
    var random_number_int = Math.floor(random_num);
    target = random_number_int + 1;
    while (!finished){
        guess_input_text = prompt("I am thinking of a number " +
            "in the range 1 to 100 \n\n" + "What is my mystery number??? ");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}
function check_guess(){
    if (isNaN(guess_input)){
        alert("What number is that?? \n\n" +
            "Put an actual number from 1 to 100");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)){
        alert("Please enter an integer from 1 to 100");
        return false;
    }
    if(guess_input > target){
        alert ("The number you guessed was too big try something smaller");
        return false;
    }
    if(guess_input < target){
        alert("The number you guessed was too small try something higher");
        return false;
    }
    alert("You got it, My mystery number was " + target +
        "! \n\nIt took you " + guesses + " guesses to get my number!");
    return true;
}
game();