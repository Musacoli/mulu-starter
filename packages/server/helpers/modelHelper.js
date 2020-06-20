/**
 * @param err {object} error object
 * @param result {object} result from database query
 * @param res {Object} the response object
 */
const handleExecution = (err, result, res) => {
  if (err) {
    return res.sendError('An error has occurred!', err)
  }
  if (!result) {
    return res.sendSuccess(result, 'No item found!')
  }
  return res.sendSuccess(result, 'success')
}

export default {
  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param field {string} the field which will act as a key
   * @param fieldValue {string | number} the value of the item in the field
   * @param populationFields {array} desired external references for data population
   */
  find: async (model, res, field, fieldValue, populationFields = []) =>
    model
      .find({})
      .where(field, fieldValue)
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res)),

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param populationFields {array} desired external references for data population
   */

  findAll: async (model, res, populationFields = []) =>
    model
      .find({})
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res)),

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param id {string} the unique identifier of the item
   * @param populationFields {array} desired external references for data population
   */

  findById: async (model, res, id, populationFields = []) =>
    model
      .findById(id)
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res)),

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param id {string} the unique identifier of the item
   * @param populationFields {array} desired external references for data population
   * @param {{fieldName: *}} updatedData
   */
  update: async (model, res, id, updatedData, populationFields = []) =>
    model
      .findByIdAndUpdate(
        id,
        { $push: updatedData },
        { new: true, useFindAndModify: false },
      )
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res)),
}
