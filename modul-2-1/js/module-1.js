var placesForHoliday = {
	 Hurgada: 15,
	 Sharm: 25,
	 Taba: 6
};
var arrayChoice = Object.keys(placesForHoliday);
var yourChoice = prompt("Hello, please write the number of your team: ");
var intChoice = parseInt(yourChoice);

for (var i = 0; i < arrayChoice.length; i++){

	if (intChoice < placesForHoliday[arrayChoice[i]]) {
		
		var confirmChoice = confirm(`Now you can choose rest in ${arrayChoice[i]}. There are availble ${placesForHoliday[arrayChoice[i]]}  places! Hurry up! `);

		if (confirmChoice == true){

			document.writeln(`Now in ${arrayChoice[i]} availble ${placesForHoliday[arrayChoice[i]] - intChoice} places`);
			break;
		}  	
		
	}

	else {
     	alert("Sorry, there are no places availble. Try to book a bit later!");	
     	break;
     }

}


