'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
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
      answer14: {
        type: Sequelize.STRING
      },
      answer15: {
        type: Sequelize.STRING
      },
      answer16: {
        type: Sequelize.STRING
      },
      answer17: {
        type: Sequelize.STRING
      },
      answer18: {
        type: Sequelize.STRING
      },
      answer19: {
        type: Sequelize.STRING
      },
      answer20: {
        type: Sequelize.STRING
      },
      answer21: {
        type: Sequelize.STRING
      },
      answer22: {
        type: Sequelize.STRING
      },
      answer23: {
        type: Sequelize.STRING
      },
      answer24: {
        type: Sequelize.STRING
      },
      answer25: {
        type: Sequelize.STRING
      },
      answer26: {
        type: Sequelize.STRING
      },
      answer27: {
        type: Sequelize.STRING
      },
      answer28: {
        type: Sequelize.STRING
      },
      answer29: {
        type: Sequelize.STRING
      },
      answer30: {
        type: Sequelize.STRING
      },
      answer31: {
        type: Sequelize.STRING
      },
      answer32: {
        type: Sequelize.STRING
      },
      answer33: {
        type: Sequelize.STRING
      },
      answer34: {
        type: Sequelize.STRING
      },
      answer35: {
        type: Sequelize.STRING
      },
      answer36: {
        type: Sequelize.STRING
      },
      answer37: {
        type: Sequelize.STRING
      },
      answer38: {
        type: Sequelize.STRING
      },
      answer39: {
        type: Sequelize.STRING
      },
      answer40: {
        type: Sequelize.STRING
      },
      answer41: {
        type: Sequelize.STRING
      },
      answer42: {
        type: Sequelize.STRING
      },
      answer43: {
        type: Sequelize.STRING
      },
      answer44: {
        type: Sequelize.STRING
      },
      answer45: {
        type: Sequelize.STRING
      },
      answer46: {
        type: Sequelize.STRING
      },
      answer47: {
        type: Sequelize.STRING
      },
      answer48: {
        type: Sequelize.STRING
      },
      answer49: {
        type: Sequelize.STRING
      },
      answer50: {
        type: Sequelize.STRING
      },
      answer51: {
        type: Sequelize.STRING
      },
      answer52: {
        type: Sequelize.STRING
      },
      answer53: {
        type: Sequelize.STRING
      },
      answer54: {
        type: Sequelize.STRING
      },
      answer55: {
        type: Sequelize.STRING
      },
      answer56: {
        type: Sequelize.STRING
      },
      answer57: {
        type: Sequelize.STRING
      },
      answer58: {
        type: Sequelize.STRING
      },
      answer59: {
        type: Sequelize.STRING
      },
      answer60: {
        type: Sequelize.STRING
      },
      answer61: {
        type: Sequelize.STRING
      },
      answer62: {
        type: Sequelize.STRING
      },
      answer63: {
        type: Sequelize.STRING
      },
      answer64: {
        type: Sequelize.STRING
      },
      answer65: {
        type: Sequelize.STRING
      },
      answer66: {
        type: Sequelize.STRING
      },
      answer67: {
        type: Sequelize.STRING
      },
      answer68: {
        type: Sequelize.STRING
      },
      answer69: {
        type: Sequelize.STRING
      },
      answer70: {
        type: Sequelize.STRING
      },
      answer71: {
        type: Sequelize.STRING
      },
      answer72: {
        type: Sequelize.STRING
      },
      answer73: {
        type: Sequelize.STRING
      },
      answer74: {
        type: Sequelize.STRING
      },
      answer75: {
        type: Sequelize.STRING
      },
      answer76: {
        type: Sequelize.STRING
      },
      answer77: {
        type: Sequelize.STRING
      },
      answer78: {
        type: Sequelize.STRING
      },
      answer79: {
        type: Sequelize.STRING
      },
      answer80: {
        type: Sequelize.STRING
      },
      answer81: {
        type: Sequelize.STRING
      },
      answer82: {
        type: Sequelize.STRING
      },
      answer83: {
        type: Sequelize.STRING
      },
      answer84: {
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
    await queryInterface.dropTable('questions');
  }
};