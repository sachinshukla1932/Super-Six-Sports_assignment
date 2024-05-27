'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CsvData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CsvData.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    creditScore: DataTypes.INTEGER,
    creditLines: DataTypes.INTEGER,
    maskedPhoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CsvData',
  });
  return CsvData;
};