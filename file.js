//Requirements

// Your game should have two pages: a landing page and a game page *
// Include separate HTML, CSS, JavaScript files *
// Choose an existing landing page on the web; screen shot the landing page, and replicate its design to create a separate game landing page that links to your game*
// Style your landing page and game page with class-based CSS
// Include a media query for a tablet to make your pages responsive
// Your game page must have at least two player objects
// Your game must have a clear win condition
// Comment your code appropriately
// Adhere to the AirBnB style guide for writing your JavaScript
// Adhere to the Google style guide for writing your HTML/CSS
// * This does NOT mean copy-and-paste, you must work from the screen shot, not the code.

// Bonus:

// Use images to create a background and/or players
// Score each game based on the time it took to complete and by how much time they beat the opposing player
// Display the time it took for the player to complete the race
// Make a 'Best of 3' tournament and display the winner of the tournament
// Keep track of best times/ high scores across page refreshes using localStorage
// Add animations
// Have players do something other than simply pressing a key to move their player, for example, make them type words, or solve simple math problems


//  My Notes: 
//  need two divs to move when keys are hit.
//  need to distinguish game board and start and finish line
//  need to create winning logic
//  want to make it where box only moves if keys pushed in correct sequence 

console.log("hello");

$().ready(function(){
//Code Here


//Code for racer movement
var player1 = {score:0, color:"blue"};
var player2 = {score:0, color:"red"};
var blueScore = 0;
var redScore = 0;
$(document).keyup(function(move) {
    if(move.keyCode == 65) { 
        $('#racer1').animate({left: "+=20px"}, 50);
        //console.log($('#racer1').css('left'));
        player1.score += 1; 
        //console.log(blueScore);
         if(player1.score == 35){
         	$(this).off("keyup");
         	$('#racer1').css("left", "0px");
         	$('#racer2').css("left", "0px");
         	player1.score = 0;
         	player2.score = 0;
         	alert("BLUE WINS");
         }
    }

    if(move.keyCode == 76) {
        $('#racer2').animate({left: "+=20px" }, 50);
        player2.score += 1;
        console.log(player2.score);
        console.log(player1.score);
        if(player2.score == 35){
        	$(this).off("keyup");
         	$('#racer1').css("left", "0px");
         	$('#racer2').css("left", "0px");
         	player1.score = 0;
         	player2.score = 0;
         	alert("RED WINS");
         }
    }
});


//Create logic that if racer css left value is >= 680px

	});//End


