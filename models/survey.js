'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init({
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
    answer13: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};