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
    if (Object.keys(req.body).length < 4) {
      return res.json({
        message: 'Please fill all fields',
        error: true
      });
    } else if (!req.body.username && !req.body.email && !req.body.password && !req.body.password2) {
      return res.json({
        message: 'Please fill all fields',
        error: true
      });
    } else if (req.body.password !== req.body.password2) {
      return res.json({
        message: 'Make sure the passwords are the same',
        error: true
      });
    } else if (req.body.password.length < 7) {
      return res.json({
        message: 'The number of password characters should not be less than 7',
        error: true
      });
    }
    users.push(req.body);
    return res.json({
      message: 'Signup Successful',
      error: false
    });
  }
}

export default Users;
