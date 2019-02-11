'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let promise = queryInterface.addColumn(
      'Todos',
      'detail',
      Sequelize.STRING)
    return promise.then(() => {
      return queryInterface.addColumn('Todos','detail',Sequelize.STRING); });
  },

  down: (queryInterface, Sequelize) => {
    let promise = queryInterface.removeColumn(
      'Todos',
      'detail')
    return promise.then(() => { return queryInterface.removeColumn('Todos', 'detail'); });
  }
};
