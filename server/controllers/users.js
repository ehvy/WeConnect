import users from '../models/users';
/**
 * @class users
 */
class Users {
  /**
     * @returns {Object} signUp
     * @param {*} req
     * @param {*} res
     */
  static signUp(req, res) {
    const newUser = req.body;
    if (newUser) {
      users.push(newUser);
      return res.status(200).json({
        message: 'Signup Successful',
        error: false
      });
    }
    return res.status(400).json({
      message: 'Signup Unsuccessful',
      error: true
    });
  }
  /**
     * @returns {Object} login
     * @param {*} req
     * @param {*} res
     */
  static login(req, res) {
    for (let userCount = 0; userCount < users.length; userCount += 1) {
      if (users[userCount].username.toLowerCase() === req.body.username.toLowerCase() &&
        users[userCount].password.toLowerCase() === req.body.password.toLowerCase()) {
        return res.status(202).json({
          message: 'Login Successful',
          error: false
        });
      }
      return res.status(401).json({
        message: 'Login Unsuccessful',
        error: true
      });
    }
  }
}

export default Users;
