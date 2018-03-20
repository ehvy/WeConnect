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
    let mainImage, smallImage1, smallImage2, smallImage3;
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
    jwt.verify(req.token, secret, (error, userAuthData) => {
      if (error) {
        return res.status(403).json({
          message: 'Token unmatch'
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
          userId: userAuthData.id
        })
        .then(newBusiness => res.status(201).json({
          message: 'Business Registration Successful',
          error: false,
          newBusiness,
          userAuthData,
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
     * @returns {Object} registerBusiness
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

    jwt.verify(req.token, secret, (error, userAuthData) => {
      if (error) {
        return res.status(403).json({
          message: 'Token does not match'
        });
      }
      Business
        .findOne({
          where: {
            id: businessId,
            userId: userAuthData.id
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
    });
  }
}
export default Businesses;
