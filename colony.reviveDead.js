/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('colony.reviveDead');
 * mod.thing == 'a thing'; // true
 */

var colonuReviveDead = {
    run: function() {
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                var result = Game.spawns.Serka.createCreep([WORK, WORK, WORK, MOVE, CARRY, CARRY, MOVE], name, Memory.creeps[name]);
                console.log(Game.time + ": Revive: " + name + " result: " + result);
            }
        }
    }
};

module.exports = colonuReviveDead;