var placesForHoliday = {
	1: 'Hurgada',
	2: 'Sharm',
	3: 'Taba'
};

var yourChoice = prompt("Please choose your place for Holoiday,  enter a number from 1 to 3: ");

var yourNumber = parseInt(yourChoice);
switch(yourNumber) {
	case 1: {
		document.writeln(`Your choice is ${placesForHoliday[1]}`);
		break;
	}

	case 2: {
		document.writeln(`Your choice is ${placesForHoliday[2]}`);
		break;
	}

	case 3:{
		document.writeln(`Your choice is ${placesForHoliday[3]}`);
		break;
	}

	default: 
		document.writeln(`Yps... its not available number. Try again!`);
	
	
}


