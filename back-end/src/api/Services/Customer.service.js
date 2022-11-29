const { user } = require('../../database/models')
const md5 = require('md5');

const register = async (body) => {
  const hashPassword = md5(body.password);

  const newUser = await user.create({
    ...body,
    password: hashPassword,
  });
  return newUser;
}

module.exports = {
  register,
}