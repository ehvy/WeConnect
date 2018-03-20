module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    businessName: {
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
    phoneNumber: {
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
  Business.associate = (models) => {
    Business.hasMany(models.Review, {
      foreignKey: 'businessId',
      as: 'reviews',
    });
    Business.hasMany(models.Photo, {
      foreignKey: 'businessId',
      as: 'photos',
    });
    Business.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Business;
};
