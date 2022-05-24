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

const order = (truth, animalsName) => {
  if (truth === true) {
    return animalsName.sort();
  }
  return animalsName;
};

const findAnimalNames = (animalName, truth, gender) => {
  const animalResidents = (species.find((animal) => animal.name === animalName)).residents;
  if (!gender) {
    const animalsName = animalResidents.map((resident) => resident.name);
    return order(truth, animalsName);
  }
  if (gender === 'male') {
    const maleAnimals = animalResidents.filter((resident) => resident.sex === gender);
    const maleAnimalsNames = maleAnimals.map((animal) => animal.name);
    return order(truth, maleAnimalsNames);
  }
  if (gender === 'female') {
    const femaleAnimals = animalResidents.filter((resident) => resident.sex === gender);
    const femaleAnimalsNames = femaleAnimals.map((animal) => animal.name);
    return order(truth, femaleAnimalsNames);
  }
};
const createObj = (array, truth, gender) => array.map((animal) => {
  const obj = {};
  obj[animal] = findAnimalNames(animal, truth, gender);
  return obj;
});

const names = (truth, gender) => {
  const obj = {};
  const animals = Object.values(noArgument());
  const [NE, NW, SE, SW] = animals;
  const array = [createObj(NE, truth, gender), createObj(NW, truth, gender),
    createObj(SE, truth, gender), createObj(SW, truth, gender)];
  array.forEach((objetos, index) => {
    obj[locationArray[index]] = objetos;
  });
  return obj;
};

function getAnimalMap(options) {
  if (!options) return noArgument();

  const { includeNames, sorted, sex } = options;
  if (includeNames === true) {
    if (sex || sorted) {
      return names(sorted, sex);
    }
    return names(false);
  }
  return noArgument();
}
console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
