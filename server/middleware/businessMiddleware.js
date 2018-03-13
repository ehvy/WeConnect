import businesses from '../models/businesses';

const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true
});

const errorMessage1 = (res, message) => res.status(404).json({
  message,
  error: true
});

const successMessage = (res, message) => res.status(200).json({
  message,
  error: false
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
    req.check('business_name', 'Business name is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('phone_number', 'Phone number is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('address', 'Address is required').notEmpty();
    req.check('city', 'City is required').notEmpty();
    req.check('state', 'State is required').notEmpty();
    req.check('description', 'Description is required').notEmpty();
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
  static removeBusiness(req, res, next) {
    req.check('business_name', 'Business Name is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
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
  static addReview(req, res, next) {
    req.check('name', 'Name is required').notEmpty();
    req.check('review', 'Review is required').notEmpty();
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
  static queryBusinessByLocationOrCategory(req, res, next) {
    const { location, category } = req.query;
    const resultArray = [];
    if (location || category) {
      if (location) {
        for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
          if (location.toLowerCase() === businesses[businessCount].state.toLowerCase()) {
            resultArray.push(businesses[businessCount]);
          }
        }
        if (resultArray.length === 0) {
          return errorMessage1(res, 'Business not found');
        }
      }
      if (category) {
        for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
          if (category.toLowerCase() === businesses[businessCount].category.toLowerCase()) {
            resultArray.push(businesses[businessCount]);
          }
        }
        if (resultArray.length === 0) {
          return errorMessage1(res, 'Business not found');
        }
      }
      return successMessage(res, resultArray);
    }
    next();
  }
  // /**
  //  * @returns {Object} query
  //  * @param {*} req
  //  * @param {*} res
  //  * @param {*} next
  //  */
  // static queryBusinessByCategory(req, res, next) {
  //   const { category } = req.query;
  //   const categoryArray = [];
  //   if (category) {
  //     for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
  //       if (category.toLowerCase() === businesses[businessCount].category.toLowerCase()) {
  //         categoryArray.push(businesses[businessCount]);
  //       }
  //     }
  //     if (categoryArray.length > 0) {
  //       return res.status(200).json({
  //         Search_result: categoryArray
  //       });
  //     }
  //     return errorMessage1(res, 'Business not found');
  //   }

  //   const errors = req.validationErrors();
  //   if (errors) { return errorMessage(res, errors[0].msg); }

  //   next();
  // }
}

export default validateBusinesses;
