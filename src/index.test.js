var expect = require('chai').expect;
var teamName = require('./index');

describe('team-name', function(){
    describe('all', function(){
        it('should be an array of string', function(){
            expect(teamName.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array){
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain`Uttam Thapa`', function(){
            expect(teamName.all).to.include('Uttam Thapa');
        });

        describe('random', function(){
            it('should return a random item from the teamName.all', function(){
                var randomItem = teamName.random();
                expect(teamName.all).to.include(randomItem);
            });
        });

    });
});
