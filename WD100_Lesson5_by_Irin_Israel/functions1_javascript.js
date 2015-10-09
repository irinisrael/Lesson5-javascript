var A = 11
var K = 10
var Q = 10
var J = 10

function blackjack(card1, card2) {
	var sum = card1 + card2;
		if (sum === 21) {
			alert('You have blackjack!');
		} else {
			alert(sum + ' is not blackjack. Sorry.');
		}
}

blackjack(A, 10);
