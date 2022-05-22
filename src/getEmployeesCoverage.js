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

const usingId = (id) => {
  const name = (employees.find((employee) => employee.id === id)).firstName;
  return usingName(name);
};

function getEmployeesCoverage(obj) {
  if (!obj) {
    return employees.map((employee) => usingName(employee.firstName));
  }
  const { name, id } = obj;
  if (name) {
    // Falar sobre o grau de complexidade;
    return usingName(name);
  }
  if (id) {
    try {
      return usingId(id);
    } catch (err) { throw new Error('Informações inválidas'); }
  }
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
