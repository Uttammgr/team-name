var uniqueRandomArray = require('unique-random-array');
var teamNames = require('./team-names.json');
var getRandomItem = uniqueRandomArray(teamNames);

module.exports = {
	all:teamNames,
	random: random
};

function random(number){
	if (number === undefined) {
		return getRandomItem();
	}else {
		var randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
