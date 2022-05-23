const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const locationArray = ['NE', 'NW', 'SE', 'SW'];
// const noArgument = () => {
//   const obj = {};
//   // const ne = species.filter((specie) => specie.location === locationArray[0]);
//   // const nw = species.filter((specie) => specie.location === locationArray[1]);
//   // const se = species.filter((specie) => specie.location === locationArray[2]);
//   // const sw = species.filter((specie) => specie.location === locationArray[3]);
//   const speciesNames = species.map((specie) => specie.name);
//   return locationArray.map((location) => species.filter((specie, index) => {
//     if (specie.location === location) {
//       return speciesNames[index];
//     }
//   }));
// };
console.log(noArgument());
function getAnimalMap(options) {
  if (!options) {
    // oi
  }
}

module.exports = getAnimalMap;
