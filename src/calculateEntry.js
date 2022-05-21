const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  if (!entrants) {
    return obj;
  }
  const keys = Object.keys(entrants);
  if (keys.length === 0) {
    return obj;
  }
  const obj1 = {
    child: (entrants.filter((entrant) => entrant.age < 18)).length,
    adult: (entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)).length,
    senior: (entrants.filter((entrant) => entrant.age >= 50)).length,
  };
  return obj1;
}

function calculateEntry(entrants) {
  const ticketsSold = countEntrants(entrants);
  return ((ticketsSold.child * prices.child) + (ticketsSold.adult * prices.adult)
  + (ticketsSold.senior * prices.senior));
}
console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
