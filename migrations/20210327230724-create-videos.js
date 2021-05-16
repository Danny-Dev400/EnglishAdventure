'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      pregunta: {
        type: Sequelize.STRING
      },
      opcion1: {
        type: Sequelize.STRING
      },
      opcion2: {
        type: Sequelize.STRING
      },
      opcion3: {
        type: Sequelize.STRING
      },
      opcion4: {
        type: Sequelize.STRING
      },
      respuesta: {
        type: Sequelize.INTEGER
      },
      nivel: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('videos');
  }
};