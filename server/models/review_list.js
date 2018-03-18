module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review_list', {
    review_list: {
      type: DataTypes.JSON,
      allowNull: false
    },
  });
  Review.associate = (models) => {
    Review.belongsTo(models.business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Review;
};
