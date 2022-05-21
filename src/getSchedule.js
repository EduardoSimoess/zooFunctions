const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const openingHours = Object.values(hours);
const animalNames = species.map((specie) => specie.name);
const noEntrance = () => {
  const obj = {};
  days.forEach((day, index) => {
    const animalsToday = species.filter((specie) => specie.availability.includes(day));
    const animalsTodayNames = animalsToday.map((animal) => animal.name);
    if (day === 'Monday') {
      obj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${openingHours[index].open}am until ${openingHours[index].close}pm`,
        exhibition: animalsTodayNames,
      };
    }
  });
  return obj;
};

const monday = () => {
  const obj = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return obj;
};
const createObj = (dia, obj) => {
  const objeto = {
  };
  objeto[dia] = obj;
  return objeto;
};
const weekDays = (target) => {
  const scheadule = noEntrance();
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = scheadule;
  const array = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const arrayObjects = [createObj(array[0], Tuesday), createObj(array[1], Wednesday),
    createObj(array[2], Thursday), createObj(array[3], Friday),
    createObj(array[4], Saturday), createObj(array[5], Sunday), createObj(array[6], Monday)];
  let answer = {};
  array.forEach((day, index) => {
    if (target === day) {
      answer = arrayObjects[index];
    }
  });
  return answer;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget
    || (!days.includes(scheduleTarget) && !animalNames.includes(scheduleTarget))) {
    return noEntrance();
  }
  if (days.includes(scheduleTarget)) {
    return weekDays(scheduleTarget);
  }
  const desiredSpecie = species.find((specie) => specie.name === scheduleTarget);
  return desiredSpecie.availability;
}
console.log(getSchedule('Wednesday'));
module.exports = getSchedule;
