import models from '../models/index';

const { Business } = models;

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
    const {
      businessName, category, phoneNumber, email, address,
      city, state, description
    } = req.body;

    const { userData } = req;
    Business
      .create({
        businessName,
        category,
        phoneNumber,
        email,
        address,
        city,
        state,
        description,
        userId: userData.id
      })
      .then(newBusiness => res.status(201).json({
        message: 'Business Registration Successful',
        error: false,
        newBusiness,
        userData,
      }))
      .catch(err => res.status(400).json({ err }));
  }

  /**
     * @returns {Object} updateBusinessProfile
     * @param {*} req
     * @param {*} res
     */
  static updateBusinessProfile(req, res) {
    const { businessId } = req.params;
    const {
      businessName, category, phoneNumber, email, address,
      city, state, description
    } = req.body;
    Business
      .find({
        where: {
          id: businessId,
        }
      })
      .then((business) => {
        if (!business) {
          return res.status(404).send({
            message: 'Cannot update business!',
          });
        }
        business
          .update({
            businessName,
            category,
            phoneNumber,
            email,
            address,
            city,
            state,
            description
          })
          .then(businessUpdate => res.status(200).json({
            message: 'Business Update Successful',
            businessUpdate,
          }));
      });
  }
  /**
     * @returns {Object} removeBusiness
     * @param {*} req
     * @param {*} res
     */
  static removeBusiness(req, res) {
    const { businessId } = req.params;
    const { businessName, email } = req.body;

    Business
      .findOne({
        where: {
          id: businessId,
          businessName,
          email
        }
      })
      .then((business) => {
        if (!business) {
          return res.status(404).send({
            message: 'Cannot delete business',
          });
        }
        return business
          .destroy()
          .then(res.status(200).json({
            message: 'Business Delete Successful'
          }));
      });
  }
  /**
     * @returns {Object} A Business
     * @param {*} req
     * @param {*} res
     */
  static getBusiness(req, res) {
    const { businessId } = req.params;
    Business
      .findById(businessId)
      .then((business) => {
        if (!business) {
          return res.status(404).send({
            message: 'Business Not Found',
          });
        }
        return res.status(200).json({
          message: 'Business Found',
          business,
        });
      });
  }
  /**
 * @returns {Object} All Businesses
 * @param {*} req
 * @param {*} res
 */
  static getAllBusiness(req, res) {
    Business
      .all()
      .then(business => res.status(200).json({
        message: 'Businesses found',
        business
      }))
      .catch(error => res.status(500).json(error));
  }
}
export default Businesses;
