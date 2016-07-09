/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.library');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    harvestNearestSource(creep) {
        var source = creep.pos.findClosestByPath(FIND_SOURCES);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
};