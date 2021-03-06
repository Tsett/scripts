var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var colonyReviveDead = require('colony.reviveDead');
var tower = require('role.tower');

module.exports.loop = function () {
    
    colonyReviveDead.run();
    
    for (var roomName in Game.rooms) {
		var lowestHealth = 9999999999;
		var currentRoom = Game.rooms[roomName];
		var structures = currentRoom.find(FIND_STRUCTURES);
		for (var structureID in structures) {
			var structure = structures[structureID];
			if (structure.hits < structure.hitsMax && structure.hits < lowestHealth) {
				lowestHealth = structure.hits;
			}
		}
		currentRoom.memory.lowestHealth=lowestHealth;
    }
    
    tower.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}