'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  videos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: DataTypes.STRING,
    pregunta: DataTypes.STRING,
    opcion1: DataTypes.STRING,
    opcion2: DataTypes.STRING,
    opcion3: DataTypes.STRING,
    opcion4: DataTypes.STRING,
    respuesta: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
    boss: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'videos',
  });
  return videos;
};