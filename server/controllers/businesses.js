import users from '../models/businesses';
/**
 * @class businesses
 */
class Businesses {
/**
   * @returns {Object} signUp
   * @param {*} req
   * @param {*} res
   */
  static signUp(req, res) {
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
    global.businesses.push(req.body);
    return res.json({
      message: 'Registration Successful',
      error: false
    });
  });  
  }
}
