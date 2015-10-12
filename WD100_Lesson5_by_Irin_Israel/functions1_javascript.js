var a = 11
var k = 10
var q = 10
var j = 10

function blackjack(card1, card2) {
	var sum = card1 + card2;
		if (sum === 21) {
			alert('You have blackjack!');
		} else {
			alert(sum + ' is not blackjack. Sorry.');
		}
}

blackjack(a, 10);
