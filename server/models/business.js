module.exports = (sequelize, DataTypes) => {
  const business = sequelize.define('business', {
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Business name already exists',
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already taken',
      },
      validate: {
        isEmail: {
          msg: 'Invalid email, Enter a valid email, with this format: emailname@mail.com'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  business.associate = (models) => {
    business.hasMany(models.review_list, {
      foreignKey: 'businessId',
      as: 'reviews',
    });
    business.hasMany(models.photo, {
      foreignKey: 'businessId',
      as: 'photos',
    });
    business.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return business;
};
