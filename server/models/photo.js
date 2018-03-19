module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    mainImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'http://via.placeholder.com/782X250'
    },
    smallImage1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'http://via.placeholder.com/300x250'
    },
    smallImage2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'http://via.placeholder.com/300x250'
    },
    smallImage3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'http://via.placeholder.com/300x250'
    },
  });
  Photo.associate = (models) => {
    Photo.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Photo;
};
