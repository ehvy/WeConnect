module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      main_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      small_image1: {
        type: Sequelize.STRING,
        allownull: true,
      },
      small_image2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      small_image3: {
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
          model: 'businesses',
          key: 'id',
          as: 'businessId',
        },
      },
    }),
  down: queryInterface => queryInterface.dropTable('photos'),
};
