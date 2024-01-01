'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'image', {
          type: Sequelize.DataTypes.STRING,
          after: "email"
        }, { transaction: t }),
      ]);
    });
  },

  // down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados, versionamento.
  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction( t=> {
      return Promise.all([
        queryInterface.removeColumn('Users', 'image',{transaction: t})
      ]);
    });
  }
};
