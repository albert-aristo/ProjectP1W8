'use strict';
let employees = require(`./employees.json`)

employees.forEach(employee => {
  employee.createdAt = new Date()
  employee.updatedAt = new Date()
});

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Employees`, employees, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(`Employees`, null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
