const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      obj[Object.values(specie)[1]] = specie.residents.length;
    });
    return obj;
  }
  const keys = Object.keys(animal);
  if (keys.length === 1) {
    const specieTocount = species.find((specie) => specie.name === animal.specie);
    return specieTocount.residents.length;
  }
  if (keys.length === 2) {
    const specieTocount = species.find((specie) => specie.name === animal.specie);
    const namedAnimals = specieTocount.residents.filter((resident) => resident.sex === animal.sex);
    return namedAnimals.length;
  }
}
console.log(countAnimals());
module.exports = countAnimals;
