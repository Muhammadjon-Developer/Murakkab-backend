const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

class AuthService {
  async register(email, password) {
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      throw new Error(`User with existing email ${email} alredy exists`);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ email, password: hashPassword });

    return { user };
  }
}

module.exports = new AuthService();
