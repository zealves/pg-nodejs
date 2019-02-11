'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let promise = queryInterface.addColumn(
      'Todos',
      'txt',
      Sequelize.STRING)
    return promise.then(() => {
      return queryInterface.addColumn('Todos', 'txt', Sequelize.STRING);
    });
  },

  down: (queryInterface, Sequelize) => {
    let promise = queryInterface.removeColumn(
      'Todos',
      'txt')
    return promise.then(() => { return queryInterface.removeColumn('Todos', 'txt'); });
  }
};