import businesses from '../models/businesses';
/**
 * @class businesses
 */
class Businesses {
/**
   * @returns {Object} registerBusiness
   * @param {*} req
   * @param {*} res
   */
  static registerBusiness(req, res) {
    if (Number(req.body.phone_number) * 1 !== Number(req.body.phone_number) ||
   Number(req.body.phone_number.substring(1)) * 1 !== Number(req.body.phone_number.substring(1))) {
      return res.status(400).json({
        message: 'Please enter a valid phone number',
        error: true
      });
    }
    businesses.push(req.body);
    return res.status(200).json({
      message: 'Registration Successful',
      error: false
    });
  }
  /**
     * @returns {Object} updateBusinessProfile
     * @param {*} req
     * @param {*} res
     */
  static updateBusinessProfile(req, res) {
    for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10)) {
        businesses[businessCount].business_name = req.body.business_name.toLowerCase();
        businesses[businessCount].category = req.body.category.toLowerCase();
        businesses[businessCount].phone_number = req.body.phone_number;
        businesses[businessCount].email = req.body.email;
        businesses[businessCount].address = req.body.address.toLowerCase();
        businesses[businessCount].city = req.body.city.toLowerCase();
        businesses[businessCount].state = req.body.state.toLowerCase();
        businesses[businessCount].description = req.body.description;
        return res.status(202).json({
          message: 'Update Successful',
          error: false
        });
      }
      return res.status(404).json({
        message: 'Bussiness not found',
        error: true

      });
    }
  }
  /**
     * @returns {Object} removeBusiness
     * @param {*} req
     * @param {*} res
     */
  static removeBusiness(req, res) {
    for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10) &&
       businesses[businessCount].business_name.toLowerCase() ===
        req.body.business_name.toLowerCase() &&
        businesses[businessCount].email === req.body.email) {
        businesses.splice(businessCount, 1);
        return res.json({
          message: 'Delete Successful',
          error: false
        });
      }
    } return res.status(404).json({
      message: 'Bussiness not found',
      error: true
    });
  }
  /**
     * @returns {Object} getBusiness
     * @param {*} req
     * @param {*} res
     */
  static getBusiness(req, res) {
    for (let businessCount = 0; businessCount <= businesses.length; businessCount += 1) {
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10)) {
        return res.json({
          business: businesses[businessCount],
          message: 'Success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  }
  /**
     * @returns {Object} getAllBusiness
     * @param {*} req
     * @param {*} res
     */
  static getAllBusiness(req, res) {
    res.status(200).json({
      business: businesses,
      error: false
    });
  }
  /**
     * @returns {Object} addreview
     * @param {*} req
     * @param {*} res
     */
  static addReview(req, res) {
    for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10)) {
        businesses[businessCount].reviews.push(req.body);
        return res.json({
          reviews: businesses[businessCount].reviews,
          message: 'Add Review Successful',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  }
  /**
     * @returns {Object} getallreviews
     * @param {*} req
     * @param {*} res
     */
  static getAllReviews(req, res) {
    for (let businessCount = 0; businessCount < businesses.length; businessCount += 1) {
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10)) {
        return res.json({
          reviews: businesses[businessCount].reviews,
          message: 'Success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  }
}
export default Businesses;
