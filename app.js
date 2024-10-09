const express = require("express");

const app = express();

app.use(express.json());

/* request = so'rov
response = javob */

// GET
app.get("/", (req, res) => {
  // res.send("Hello Muhammadjon !");
  // res.json({ message: "Hello Muhammadjon !" }); // json formatda yuborish. Agar ma'lumotlar ko'p bo'lsa shu formatda jo'natiladi chunki json juda yengil
  res.status(200).json({ message: "Everything is perfect !" }); // status code yuborish
});

// POST
app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  const message = `His full name - ${firstName} ${lastName}`;
  res.send(message);
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

const PORT = 8080;

app.listen(PORT, () => console.log(`Listening on - http://localhost:${PORT}`));
