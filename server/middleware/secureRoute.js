import jwt from 'jsonwebtoken';
import models from '../models/index';

const { User } = models;

const { secret } = process.env;

/**
 * @class validateRoutes
 */
class ValidateRoutes {
  /**
     * @returns {Object} query
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
  static secureBusinessRoute(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      return res.status(403).json({
        message: 'Add token to header',
        error: true
      });
    }
    req.token = bearerHeader;
    jwt.verify(req.token, secret, (error, userData) => {
      if (error) {
        return res.status(403).json({
          message: 'Token does not match'
        });
      }
      req.userData = userData;
      User
        .findOne({
          where: {
            id: userData.id
          }
        })
        .then((user) => {
          if (!user) {
            return res.status(404).send({
              message: 'Cannot update business!',
            });
          }
          return next();
        });
    });
  }
}

export default ValidateRoutes;
