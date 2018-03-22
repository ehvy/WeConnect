module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Review;
};
