/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:11:35
 * @FilePath: \Screeps\stuff.power.js
 */

var stuffPower = {
	run: function() {
		if (Memory.switch.processPower == true) {
			if (Game.getObjectById('5ed8d3f8024b22aca02996ca').processPower() == ERR_NOT_ENOUGH_RESOURCES) {
				// if (Game.getObjectById('5ed8d3f8024b22aca02996ca').store.getUsedCapacity(RESOURCE_ENERGY) < 50) {
				//     Memory.tasks.W34N2 = {id: '5ed8d3f8024b22aca02996ca', need: RESOURCE_ENERGY};
				// }
				// if (Game.getObjectById('5ed8d3f8024b22aca02996ca').store.getUsedCapacity(RESOURCE_POWER) == 0) {
				//     Memory.tasks.W34N2 = {id: '5ed8d3f8024b22aca02996ca', need: RESOURCE_POWER};
				// }
			}
		}
	}
}

module.exports = stuffPower;
