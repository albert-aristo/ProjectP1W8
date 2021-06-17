'use strict';
let items = require(`./items.json`)

items.forEach(item=>{
  item.createdAt = new Date()
  item.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Items`, items, {})
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
    return queryInterface.bulkDelete('Items', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
