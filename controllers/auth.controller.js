const authService = require("../service/user.service");

class AuthController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await authService.register(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async activation(req, res, next) {}
}

module.exports = new AuthController();
