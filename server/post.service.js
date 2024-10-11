const postModel = require("../models/post.model");

class PostService {
  async getAll() {
    const allPosts = await postModel.find();
    return allPosts;
  }

  async create(post) {
    const newPost = await postModel.create(post);
    return newPost;
  }

  async edit(post, id) {
    if (!id) {
      throw new Error("Id not found");
    }

    const updatedData = await postModel.findByIdAndUpdate(id, post, {
      new: true,
    });

    return updatedData;
  }

  async getOne(id) {
    const post = await postModel.findById(id);
    return post;
  }

  async delete(id) {
    const post = await postModel.findByIdAndDelete(id);
    return post;
  }
}

module.exports = new PostService();
