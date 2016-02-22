var uniqueRandomArray = require('unique-random-array');
var teamNames = require('./team-names.json');

module.exports = {
	all:teamNames,
	random: uniqueRandomArray(teamNames)
};