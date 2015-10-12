function getName(firstName) {
	console.log("Hi " + firstName);
}

getName("Irin");


function shoo() {
	console.log("Go away!");
}

shoo();


function alertPrize(doorNum) {
	if (doorNum === 1) {
		alert('You won a car!');
	}
	else if(doorNum === 2) {
		alert('You won a vacation!');
	}
}

alertPrize(2);
