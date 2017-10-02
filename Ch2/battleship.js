var randomLoc = Math.floor(Math.random() * 4) + 1
var location1 = randomLoc, location2 = randomLoc + 1, location3 = randomLoc + 2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(!isSunk){
    guess = Number(prompt("Ready, aim, fire! (enter a number 0-6):"));
    if(guess < 1 && guess > 6){
        alert("Please enter a cell number");
    } else {
        guesses += 1;
        if(guess == location1|| guess == location2 || guess == location3){
            hits += 1;
            alert("Hit!");
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship!");
            }

        }
        else{
            alert("Miss!");
        }
    }
}
alert("You sank the ship in " + guesses + " guesses, which means your accuracy was " + (3/guesses));