module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: {
      type: DataTypes.JSON,
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
