const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
});
/**
 * @class validateUsers
 */
class validateUsers {
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static signUp(req, res, next) {
    req.check('username', 'Username is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('password', 'Password is required').notEmpty();
    req.check('password2', 'Password confirmation is required').notEmpty();
    req
      .check('password', 'Minimum password length is 7 characters')
      .isLength({ min: 7 });
    req.check('password2', 'Password do not match').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static login(req, res, next) {
    req.check('username', 'Username is required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req
      .check('password', 'Minimum password length is 7 characters')
      .isLength({ min: 7 });
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
}

export default validateUsers;
