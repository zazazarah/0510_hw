$(document).ready(function() {

	//Set up our variables to use later
    var computerChoice;

    //Get a random value for the computer choice
    var computerChoiceVal = Math.random();

    //Turn the random value into a choice for the computer
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log(computerChoice);

    $(document).on("click", ".choice", function() {
    	var userChoice = $(this).attr("id");

    	if (userChoice === computerChoice) {
    		alert("It's a tie!");
    	} else {
    		if (userChoice === "paper") {
    			if (computerChoice === "scissors") {
    				alert("Loser!!");
    			} else {
    				$(this).addClass("success");
    			}
    		} else if (userChoice === "rock") {
    			if (computerChoice === "paper") {
    				alert("Loser!");
    			} else {
    				$(this).addClass("success");
    			}
    		} else if (userChoice === "scissors") {
    			if (computerChoice === "rock") {
    				alert("Loser!");
    			} else {
    				$(this).addClass("success");
    			}
    		}
    	} 



    });

    //Now we have access to the computer's choice via the computerChoice variable
    // math.random brings up a random number between 0 and 1 (decimals)


	

});
