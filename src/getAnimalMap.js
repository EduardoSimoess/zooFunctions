const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locationArray = ['NE', 'NW', 'SE', 'SW'];

const noArgument = () => {
  const obj = {};
  const hoolZooMap = locationArray.map((location) => species.filter((specie) => specie.location
    === location));
  hoolZooMap.forEach((location, index) => {
    obj[locationArray[index]] = location.map((locationNames) => locationNames.name);
  });
  return obj;
};

const findAnimalNames = (animalName) => {
  const animalResidents = (species.find((animal) => animal.name === animalName)).residents;
  return animalResidents.map((resident) => resident.name);
};
const createObj = (array) => array.map((animal) => {
  const obj = {};
  obj[animal] = findAnimalNames(animal);
  return obj;
});

const names = (truth) => {
  const obj = {};
  const animals = Object.values(noArgument());
  const [NE, NW, SE, SW] = animals;
  const array = [createObj(NE), createObj(NW), createObj(SE), createObj(SW)];
  array.forEach((objetos, index) => {
    obj[locationArray[index]] = objetos;
  });
  return obj;
};

function getAnimalMap(options) {
  if (!options) return noArgument();

  const { includeNames } = options;
  if (includeNames === true) return names();
  // const { sort } = options;
  // if (includeNames === true && sort === true)
  return noArgument();
}
console.log(names());

module.exports = getAnimalMap;
