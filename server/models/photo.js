module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define('photo', {
    main_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    small_image1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    small_image2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    small_image3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  photo.associate = (models) => {
    photo.belongsTo(models.business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return photo;
};
