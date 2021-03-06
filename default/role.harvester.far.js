/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:15:45
 * @FilePath: \Screeps\role.harvester.far.js
 */

var roleHarvesterFar = {

	/** @param {Creep} creep **/
	run: function(creep) {

		if (creep.store.getFreeCapacity() > 0) {
			var sources = Game.getObjectById(creep.memory.target);
			if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
		else {
			var links = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: (structure) => structure.structureType == STRUCTURE_LINK
			})
			if (creep.transfer(links, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(links.pos, {visualizePathStyle: {stroke: '#ffffff'}});
			}
		}
	}
};

module.exports = roleHarvesterFar;
