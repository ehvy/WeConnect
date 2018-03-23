import models from '../models/index';

const { Business } = models;

const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
});

/**
 * @class validateBusinesses
 */
class validateBusinesses {
  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static registerBusiness(req, res, next) {
    req.check('businessName', 'Business name is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('phoneNumber', 'Phone number is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('address', 'Address is required').notEmpty();
    req.check('city', 'City is required').notEmpty();
    req.check('state', 'State is required').notEmpty();
    req.check('description', 'Description is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      return errorMessage(res, errors[0].msg);
    }
    if (Number(req.body.phoneNumber) * 1 !== Number(req.body.phoneNumber) ||
   Number(req.body.phoneNumber.substring(1)) * 1 !== Number(req.body.phoneNumber.substring(1))) {
      return res.status(400).json({
        message: 'Please enter a valid phone number',
        error: true
      });
    }

    next();
  }

  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static secureRoute(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;
      return next();
    }
    return res.status(403).json({
      message: 'Add token to header',
      error: true
    });
  }

  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static getBusinessByLocationOrCategory(req, res, next) {
    const { location, category } = req.query;
    if (location || category) {
      if (location) {
        Business
          .findAll({
            where: {
              city: {
                $iLike: `%${location}%`
              }
            }
          })
          .then((business) => {
            if (business.length === 0) {
              return res.status(404).json({
                message: 'No business in this location',
              });
            }
            return res.status(200).json({
              message: `${business.length} business found`,
              business
            });
          });
      }
      if (category) {
        Business
          .findAll({
            where: {
              category: {
                $iLike: `%${category}%`,
              }
            }
          })
          .then((business) => {
            if (business.length === 0) {
              return res.status(404).json({
                message: 'No business in this category!',
              });
            }
            return res.status(200).json({
              message: `${business.length} business found`,
              business
            });
          });
      }
    }
    return next();
  }

  /**
   * @returns {Object} query
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static removeBusiness(req, res, next) {
    req.check('businessName', 'Business Name is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
}
export default validateBusinesses;
