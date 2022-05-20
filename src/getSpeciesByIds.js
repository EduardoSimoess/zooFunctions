const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((serialNumber) => species.find((specie) => specie.id === serialNumber));
  // for (let index = 0; index < ids.length; index += 1) {
  //   return species.find((specie) => specie.id === ids[index]);
  // }
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
