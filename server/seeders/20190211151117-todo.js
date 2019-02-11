'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Todos', [
        {
          title: 'aaa',
          detail: 'asdasd',
          createdAt: '2019-02-11 12:12:30.597+00',
          updatedAt: '2019-02-11 12:12:30.597+00'
        },
        {
          title: 'aaa1',
          detail: 'asdasd1',
          createdAt: '2019-02-11 12:12:30.597+00',
          updatedAt: '2019-02-11 12:12:30.597+00'
        },
        {
          title: 'aaa2',
          detail: 'asdasd2',
          createdAt: '2019-02-11 12:12:30.597+00',
          updatedAt: '2019-02-11 12:12:30.597+00'
        },
        {
          title: 'aaa3',
          detail: 'asdasd3',
          createdAt: '2019-02-11 12:12:30.597+00',
          updatedAt: '2019-02-11 12:12:30.597+00'
        },
        {
          title: 'aaa4',
          detail: 'asdasd4',
          createdAt: '2019-02-11 12:12:30.597+00',
          updatedAt: '2019-02-11 12:12:30.597+00'
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
  }
};
