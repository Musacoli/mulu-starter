
const handleExecution = (err, result, res) => {
  if (err) {
    return res.sendError('An error has occurred!', err)
  } else if (!result) {
    return res.sendSuccess(result, 'No item found!')
  }
  return res.sendSuccess(result, 'success')
}

export default {

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param field {string} the field which will act as a key
   * @param fieldValue {string} the value of the item in the field
   * @param populationFields {array} desired external references for data population
   */
  find: async (model, res, field, fieldValue, populationFields = []) => {
    return model
      .find(`{ ${field} : ${fieldValue} }`)
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res))
  },

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param populationFields {array} desired external references for data population
   */

  findAll: async (model, res, populationFields = []) => {
    return model
      .find({})
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res))

  },

  /**
   * @param model {object} model to be queried
   * @param res {object} the response object
   * @param id {string} the unique identifier of the item
   * @param populationFields {array} desired external references for data population
   */

  findById: async (model, res, id, populationFields = []) => {
    return model
      .findById(id)
      .populate(populationFields)
      .exec((err, result) => handleExecution(err, result, res))
  }
}
