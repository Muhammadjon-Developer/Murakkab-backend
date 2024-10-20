const userModel = require("../models/user.model");
const UserDto = require("../dtos/user.dto");
const bcrypt = require("bcrypt");
const tokenService = require("./token.service");

class AuthService {
  async register(email, password) {
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      throw new Error(`User with existing email ${email} alredy exists`);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ email, password: hashPassword });
    // email service

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    
    // token
    return { userDto };
  }

  async activation(userId) {
    const user = await userModel.findById(userId);

    if (!user) {
      throw new Error("User is not defined");
    }

    user.isActivated = true;
    await user.save();
  }
}

module.exports = new AuthService();
