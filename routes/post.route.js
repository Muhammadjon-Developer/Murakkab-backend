const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

/* request = so'rov
response = javob */

router.get("/get", postController.getAll);
router.post("/create", postController.create);
router.put("/edit/:id", postController.edit);
router.get("/get-one/:id", postController.getOne);
router.delete("/delete/:id", postController.delete);

module.exports = router;
