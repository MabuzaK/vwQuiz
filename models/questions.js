'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questions.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    answer5: DataTypes.STRING,
    answer6: DataTypes.STRING,
    answer7: DataTypes.STRING,
    answer8: DataTypes.STRING,
    answer9: DataTypes.STRING,
    answer10: DataTypes.STRING,
    answer11: DataTypes.STRING,
    answer12: DataTypes.STRING,
    answer13: DataTypes.STRING,
    answer14: DataTypes.STRING,
    answer15: DataTypes.STRING,
    answer16: DataTypes.STRING,
    answer17: DataTypes.STRING,
    answer18: DataTypes.STRING,
    answer19: DataTypes.STRING,
    answer20: DataTypes.STRING,
    answer21: DataTypes.STRING,
    answer22: DataTypes.STRING,
    answer23: DataTypes.STRING,
    answer24: DataTypes.STRING,
    answer25: DataTypes.STRING,
    answer26: DataTypes.STRING,
    answer27: DataTypes.STRING,
    answer28: DataTypes.STRING,
    answer29: DataTypes.STRING,
    answer30: DataTypes.STRING,
    answer31: DataTypes.STRING,
    answer32: DataTypes.STRING,
    answer33: DataTypes.STRING,
    answer34: DataTypes.STRING,
    answer35: DataTypes.STRING,
    answer36: DataTypes.STRING,
    answer37: DataTypes.STRING,
    answer38: DataTypes.STRING,
    answer39: DataTypes.STRING,
    answer40: DataTypes.STRING,
    answer41: DataTypes.STRING,
    answer42: DataTypes.STRING,
    answer43: DataTypes.STRING,
    answer44: DataTypes.STRING,
    answer45: DataTypes.STRING,
    answer46: DataTypes.STRING,
    answer47: DataTypes.STRING,
    answer48: DataTypes.STRING,
    answer49: DataTypes.STRING,
    answer50: DataTypes.STRING,
    answer51: DataTypes.STRING,
    answer52: DataTypes.STRING,
    answer53: DataTypes.STRING,
    answer54: DataTypes.STRING,
    answer55: DataTypes.STRING,
    answer56: DataTypes.STRING,
    answer57: DataTypes.STRING,
    answer58: DataTypes.STRING,
    answer59: DataTypes.STRING,
    answer60: DataTypes.STRING,
    answer61: DataTypes.STRING,
    answer62: DataTypes.STRING,
    answer63: DataTypes.STRING,
    answer64: DataTypes.STRING,
    answer65: DataTypes.STRING,
    answer66: DataTypes.STRING,
    answer67: DataTypes.STRING,
    answer68: DataTypes.STRING,
    answer69: DataTypes.STRING,
    answer70: DataTypes.STRING,
    answer71: DataTypes.STRING,
    answer72: DataTypes.STRING,
    answer73: DataTypes.STRING,
    answer74: DataTypes.STRING,
    answer75: DataTypes.STRING,
    answer76: DataTypes.STRING,
    answer77: DataTypes.STRING,
    answer78: DataTypes.STRING,
    answer79: DataTypes.STRING,
    answer80: DataTypes.STRING,
    answer81: DataTypes.STRING,
    answer82: DataTypes.STRING,
    answer83: DataTypes.STRING,
    answer84: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'questions',
  });
  return questions;
};