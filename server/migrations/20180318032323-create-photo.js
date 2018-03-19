module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mainImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smallImage1: {
        type: Sequelize.STRING,
        allownull: true,
      },
      smallImage2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      smallImage3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      businessId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Businesses',
          key: 'id',
          as: 'businessId',
        },
      },
    }),
  down: queryInterface => queryInterface.dropTable('Photos'),
};
