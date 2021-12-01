const express = require("express");
const cors = require("cors");
const User = require("./firebaseConfig");
const { readFirebase, createFirebase } = require("./firebaseCrud");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  await createFirebase(User, req.body);
  res.send({ msg: "User Added" });
});

app.get("/getAllUsers", async (req, res) => {
  const data = await readFirebase(User);
  let users = [];
  try {
    data.docs.forEach((dataItem) => {
      users.push(dataItem.data());
    });
  } catch (err) {
    console.log(err);
  }
  res.send({ users: users });
});

app.listen(PORT, () => {
  console.log("Server stated on port: " + PORT);
});
