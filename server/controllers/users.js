import hashCode, { hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models/index';

const { secret } = process.env;
const { User } = models;

/**
 * @class users
 */
class Users {
  /**
     * @returns {Object} signUp
     * @param {*} req
     * @param {*} res
     */
  static signup(req, res) {
    return User.create({
      username: req.body.username,
      email: req.body.email,
      // passwords are hashed by bcrypt
      password: hashSync(req.body.password, 10),
      password2: hashSync(req.body.password, 10),
    })
      .then(newUser => res.status(201).json({
        message: 'Signup Successful',
        error: false,
        newUser
      }))
      .catch(error => res.status(400).json({ error }));
  }
  /**
     * @returns {Object} login
     * @param {*} req
     * @param {*} res
     */
  static login(req, res) {
    const { username, password } = req.body;
    User.findOne({ where: { username } })
      .then((logInUser) => {
        if (!logInUser) {
          return res.status(400).json({
            message: 'username or password is not valid'
          });
        } else if (logInUser && hashCode.compareSync(password, logInUser.password)) {
          const userInfo = {
            username: logInUser.username,
            email: logInUser.email,
            id: logInUser.id
          };
          // generate token
          const token = jwt.sign(userInfo, secret, { expiresIn: '10h' });
          return res.status(201).json({
            message: 'Successful login',
            error: false,
            userInfo,
            token,
          });
        }
      })
      .catch(error => res.status(400).json({ error }));
  }
}
export default Users;
