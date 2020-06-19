import modelHelper from '../../helpers/modelHelper';
import { User } from '../../models'

const createUser = async (req, res) => {

  const { username } = req.body

  try {
    const user = await User.create({
      username
    });

    return res.sendSuccess(user, 'success', 201)
  } catch (e) {
    return res.sendError('An error has occurred', e)
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    return await modelHelper.findById(
      User,
      res,
      id
    )

  } catch (e) {
    return res.sendError('An error has occurred', e)
  }

}

const getUserByUsername = async (req, res) => {
  const { username } = req.query;

  console.log(username)

  try {
    return await modelHelper.find(
      User,
      res,
      'username',
      username
    )

  } catch (e) {
    return res.sendError('An error has occurred', e)
  }

}

const getUsers = async (req, res) => {

  try {
    return await modelHelper.findAll(
      User,
      res
    );

  } catch (e) {
    return res.sendError('An error has occurred', e);
  }
}

export {
  createUser,
  getUserById,
  getUserByUsername,
  getUsers
}
