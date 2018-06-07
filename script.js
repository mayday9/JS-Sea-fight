var randomLoc=Math.floor(Math.random()*5);
var location1=randomLoc, location2=location1+1, location3=location2+1;
var guess, hits=0, guesses=0, isSunk=false;

while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell numder!");
    } else {
        guesses++;


        if (guess == location1 || guess == location2 || guess == location3) {

            alert("Hit!");
            hits++;


            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

var stats="You took "+guesses+" guesses to sink the battleship, "+" which means shooting accurasy was "+(3/guesses);
alert(stats);