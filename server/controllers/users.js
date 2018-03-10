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
    users.push(req.body);
    return res.status(200).json({
      message: 'Signup Successful',
      error: false
    });
  }
  /**
     * @returns {Object} login
     * @param {*} req
     * @param {*} res
     */
  static login(req, res) {
    for (let userCount = 0; userCount < users.length; userCount += 1) {
      if (users[userCount].username === req.body.username &&
        users[userCount].password === req.body.password) {
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
