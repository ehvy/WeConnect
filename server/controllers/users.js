import { user } from '../models';

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
    user.find({
      where: {
        username: req.body.username,
      }
    }).then((username) => {
      if (username) {
        return res.status(400).json({
          message: 'Username already exists',
          error: true
        });
      }
      return user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });
    })

      .then(newUser => res.status(201).json({
        message: 'Signup Successful',
        error: false,
        newUser
      }))
      .catch(error => res.status(400).json({ error }));
  }
}
export default Users;
