import jwt from 'jsonwebtoken';
import models from '../models/index';

const { secret } = process.env;
const { Business } = models;
const { Photo } = models;

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
    let mainImage, smallImage1, smallImage2, smallImage3;
    if (Number(req.body.phoneNumber) * 1 !== Number(req.body.phoneNumber) ||
   Number(req.body.phoneNumber.substring(1)) * 1 !== Number(req.body.phoneNumber.substring(1))) {
      return res.status(400).json({
        message: 'Please enter a valid phone number',
        error: true
      });
    }
    jwt.verify(req.token, secret, (error, userData) => {
      if (error) {
        return res.status(403).json({
          message: 'Token does not match'
        });
      }
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
        .then(() => {
          Photo
            .create({
              mainImage, smallImage1, smallImage2, smallImage3
            });
        })
        .catch(err => res.status(400).json({ err }));
    });
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
    if (Number(req.body.phoneNumber) * 1 !== Number(req.body.phoneNumber) ||
   Number(req.body.phoneNumber.substring(1)) * 1 !== Number(req.body.phoneNumber.substring(1))) {
      return res.status(400).json({
        message: 'Please enter a valid phone number',
        error: true
      });
    }

    jwt.verify(req.token, secret, (error, userData) => {
      if (error) {
        return res.status(403).json({
          message: 'Token does not match'
        });
      }
      Business
        .find({
          where: {
            id: businessId,
            userId: userData.id
          }
        })
        .then((business) => {
          if (!business) {
            return res.status(404).send({
              message: 'Cannot update business!',
            });
          }
          Business
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
    jwt.verify(req.token, secret, (err, userData) => {
      if (err) {
        res.status(403).json({
          message: 'Token does not match'
        });
      } else {
        Business
          .findOne({
            where: {
              id: businessId,
              userId: userData.id,
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
