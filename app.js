const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model.js");
require("dotenv").config();

const app = express();

app.use(express.json());

/* request = so'rov
response = javob */

// GET
app.get("/", async (req, res) => {
  try {
    const allPosts = await postModel.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }

  // res.send("Hello Muhammadjon !");
  // res.json({ message: "Hello Muhammadjon !" }); // json formatda yuborish. Agar ma'lumotlar ko'p bo'lsa shu formatda jo'natiladi chunki json juda yengil
  // res.status(200).json({ message: "Everything is perfect !" }); // status code yuborish
});

// POST
app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await postModel.create({ title, body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// DELETE
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

// PUT
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({ id, body });
});

const PORT = process.env.PORT || 8080;

const bootstrap = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("Connected DB"));
    app.listen(PORT, () =>
      console.log(`Listening on - http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};

bootstrap();
