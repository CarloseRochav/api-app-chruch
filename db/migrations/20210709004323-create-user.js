'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phoneNumber:{
        
      },
      address:{

      },
      baptism:{

      },
      email: {
        type: Sequelize.STRING
      },      
      profileFile:{

      },
      gender:{

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
    await queryInterface.dropTable('Users');
  }
};

    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // phoneNumber:DataTypes.STRING,
    // address:DataTypes.STRING,
    // baptism: DataTypes.BOOLEAN,
    // email: DataTypes.STRING,
    // profileFile : DataTypes.STRING,
    // gender:DataTypes.STRING,