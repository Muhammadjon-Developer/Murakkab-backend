const userModel = require("../models/user.model");
const UserDto = require("../dtos/user.dto");
const bcrypt = require("bcrypt");

class AuthService {
  async register(email, password) {
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      throw new Error(`User with existing email ${email} alredy exists`);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ email, password: hashPassword });

    const userDto = new UserDto(user);

    return { userDto };
  }
}

module.exports = new AuthService();
