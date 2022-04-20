'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      answer1: {
        type: Sequelize.STRING
      },
      answer2: {
        type: Sequelize.STRING
      },
      answer3: {
        type: Sequelize.STRING
      },
      answer4: {
        type: Sequelize.STRING
      },
      answer5: {
        type: Sequelize.STRING
      },
      answer6: {
        type: Sequelize.STRING
      },
      answer7: {
        type: Sequelize.STRING
      },
      answer8: {
        type: Sequelize.STRING
      },
      answer9: {
        type: Sequelize.STRING
      },
      answer10: {
        type: Sequelize.STRING
      },
      answer11: {
        type: Sequelize.STRING
      },
      answer12: {
        type: Sequelize.STRING
      },
      answer13: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surveys');
  }
};