function calculateProfit() {

    let rounds = Number(document.getElementById("rounds").value);

    let bets = rounds;

    let win = 0;

	for (var i = 1; i <= rounds; i++) {

        let pips = Math.round((Math.random() * 5) + 1);

		if ([1,3,5].includes(pips)) {
            win += 0;
        } else if ([2,4].includes(pips)) {
            win += 1.25;
        } else if (pips === 6) {
            win += 1.5;
        }

	}

    let profit = bets - win;

	document.getElementById("answer").innerHTML = "Bets were altogether " + rounds.toFixed(2) + " euros" + "<br>" + "Wins were " + 
    win.toFixed(2) + " euros" + "<br>" + "Profit was " + profit.toFixed(2) + " euros";

    // Read value of rounds from the input field
    

   
    // Make a loop which is executed as many times as was set through the input field. 
    // Let win counter cumulating during every round of the loop. 
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
     

        // If the randomized pips is 1, 3 or 5,  no pay
        
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
       

        // Otherwise the pips 6 returns the inserted bet 150%	
        
    

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   

    // Write the answer on the page, to the answer div, as content of the div
   

}