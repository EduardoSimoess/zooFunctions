const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findInfoEmployee = (employeeName) => employees.find((employee) => employee.firstName
=== employeeName || employee.lastName === employeeName);

const findTakenCareNames = (ids) => ids.map((id) => (species.find((specie) => specie.id
=== id)).name);

const findTakenCareLocation = (ids) => ids.map((id) => (species.find((specie) => specie.id
=== id)).location);

const usingName = (name) => {
  const employee = findInfoEmployee(name);
  const employeesId = employee.id;
  const employeeFullName = `${employee.firstName} ${employee.lastName}`;
  const takenCareId = employee.responsibleFor;
  const takenCareNames = findTakenCareNames(takenCareId);
  const takenCareLocation = findTakenCareLocation(takenCareId);
  const answer = {
    id: employeesId,
    fullName: employeeFullName,
    species: takenCareNames,
    locations: takenCareLocation,
  };
  return answer;
};

function getEmployeesCoverage(obj) {
  const { name, id } = obj;
  if (name) {
    return usingName(name);
  }
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
