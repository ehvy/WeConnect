module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already taken',
      }
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Business, {
      foreignKey: 'userId',
      as: 'businesses',
    });
  };

  return User;
};
