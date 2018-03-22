import jwt from 'jsonwebtoken';
import models from '../models/index';

const { secret } = process.env;
const { Business } = models;
const { Review } = models;

/**
 * @class reviews
 */
class Reviews {
  /**
     * @returns {Object} addreview
     * @param {*} req
     * @param {*} res
     */
  static addReview(req, res) {
    const { businessId } = req.params;
    const { name, review } = req.body;
    jwt.verify(req.token, secret, (err) => {
      if (err) {
        res.status(403).json({
          message: 'Token does not match'
        });
      } else {
        Business
          .findById(businessId)
          .then((business) => {
            if (!business) {
              return res.status(404).send({
                message: 'Cannot post review',
              });
            }
            Review
              .create({
                name,
                review,
                businessId
              });
            return res.status(200).json({
              name,
              review
            });
          });
      }
    });
  }
  /**
     * @returns {Object} getAllreviews
     * @param {*} req
     * @param {*} res
     */
  static getAllReviews(req, res) {
    const { businessId } = req.params;

    Review
      .findAll({ where: { businessId } })
      .then((reviews) => {
        if (reviews.length === 0) {
          return res.status(404).send({
            message: 'No reviews are avaiable for this business',
          });
        }
        return res.status(200).json({
          reviews
        });
      });
  }
}
export default Reviews;
