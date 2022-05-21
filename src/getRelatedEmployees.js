const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managed = employees.filter((employee) => employee.managers.includes(managerId));
  return managed.map((led) => `${led.firstName} ${led.lastName}`);
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83')
module.exports = { isManager, getRelatedEmployees };
