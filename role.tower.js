/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.tower');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function() {
        var tower = Game.getObjectById('5782212c63cd40e51c25d4e2');
        if(tower) {
//            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
//                filter: (structure) => structure.hits < structure.hitsMax
//            });
//            if(closestDamagedStructure) {
//                tower.repair(closestDamagedStructure);
//            }
    
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
            	var result = tower.attack(closestHostile);
            	Game.notify("Attacking enemy " + closestHostile + " with " + result, 5);
            }
        }
    }
};