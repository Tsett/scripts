/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('memory.clean');
 * mod.thing == 'a thing'; // true
 */

var memoryClean = {
    run: function() {
        for (var name in Memory.creeps) {
            var creep = Game.creeps[name];
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
    }
};

module.exports = memoryClean;