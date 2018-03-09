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
    if (Object.keys(req.body).length < 8) {
      return res.json({
        message: 'Please fill all fields',
        error: true
      });
    } else if (!req.body.business_name && !req.body.category &&
       !req.body.phone_number && !req.body.email
       && !req.body.address && !req.body.city && !req.body.state && !req.body.description) {
      return res.json({
        message: 'Please fill all fields',
        error: true
      });
    } else if (Number(req.body.phone_number) * 1 !== Number(req.body.phone_number) ||
   Number(req.body.phone_number.substring(1)) * 1 !== Number(req.body.phone_number.substring(1))) {
      return res.json({
        message: 'Please enter a phone number',
        error: true
      });
    }
    businesses.push(req.body);
    return res.json({
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
        businesses[businessCount].business_name = req.body.business_name;
        businesses[businessCount].category = req.body.business_nam;
        businesses[businessCount].phone_number = req.body.phone_number;
        businesses[businessCount].email = req.body.email;
        businesses[businessCount].address = req.body.address;
        businesses[businessCount].city = req.body.city;
        businesses[businessCount].state = req.body.state;
        businesses[businessCount].description = req.body.description;
        return res.json({
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
      if (businesses[businessCount].id === parseInt(req.params.businessid, 10)) {
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
}

export default Businesses;
