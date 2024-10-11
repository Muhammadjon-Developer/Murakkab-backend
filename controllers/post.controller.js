const postService = require("../server/post.service");

class PostController {
  async getAll(req, res) {
    try {
      const allPosts = await postService.getAll();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json(error);
    }

    /* res.send("Hello Muhammadjon !");
    res.json({ message: "Hello Muhammadjon !" }); // json formatda yuborish. Agar ma'lumotlar ko'p bo'lsa shu formatda jo'natiladi chunki json juda yengil
    res.status(200).json({ message: "Everything is perfect !" }); // status code yuborish */
  }

  async create(req, res) {
    try {
      const post = await postService.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async edit(req, res) {
    try {
      const { body, params } = req;
      const post = await postService.edit(body, params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
