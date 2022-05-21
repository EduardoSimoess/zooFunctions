const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const days = Object.keys(hours);
    const openingHours = Object.values(hours);
    const obj = {};
    days.forEach((day, index) => {
      obj[day] = {
        officeHour: `Open from ${openingHours[index].open}am until ${openingHours[index].close}pm`,
        exhibition: 'olá',
      };
    });
    return obj;
  }
  const desiredSpecie = species.find((specie) => specie.name === scheduleTarget);
  return desiredSpecie.availability;
}
console.log(getSchedule());
module.exports = getSchedule;
