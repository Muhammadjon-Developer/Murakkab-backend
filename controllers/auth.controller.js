const authService = require("../service/auth.service");

class AuthController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await authService.register(email, password);

      return res.json(data); // avtomatik tarzda status = 200 chunki try ni ichiga turganligi uchun
    } catch (error) {
      console.log(error);
    }
  }

  async activation(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
