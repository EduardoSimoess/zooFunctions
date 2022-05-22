const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findEmplyee = (employeeId) => employees.find((employee) => employee.id === employeeId);
const findAnimal = (animal) => species.find((specie) => specie.id === animal);
const oldestAnimal = (residents) => residents.reduce((acc, resident, index) => {
  if (index === 0) {
    return resident;
  }
  if (resident.age > acc.age) {
    return resident;
  }
  return acc;
});

function getOldestFromFirstSpecies(id) {
  const employeeObject = findEmplyee(id);
  const firstAnimalsId = employeeObject.responsibleFor[0];
  const animalsArray = (findAnimal(firstAnimalsId)).residents;
  const oldAnimal = oldestAnimal(animalsArray);
  const { age, name, sex } = oldAnimal;
  const array = [name, sex, age];
  return array;
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
