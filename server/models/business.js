module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Business name already exists',
      },
      is: {
        args: /([a-zA-Z0-9])+/,
        msg: 'Business name can contain only alphabets and numbers',
      },
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
      validate: {
        notEmpty: {
          args: true,
          msg: 'Location Field Required!',
        },
        is: {
          args: /([a-zA-Z0-9])+/,
          msg: 'Location can contain alphabets and numbers',
        },
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Business.associate = (models) => {
    Business.hasMany(models.Review, {
      foreignKey: 'businessId',
      as: 'reviews',
    });
    Business.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Business;
};
