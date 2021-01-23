const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send(
    `
      <div class="">
      <form method="POST">
        <input type="email" placeholder="email" name="email">
        <input type="password" placeholder="password" name="password">
        <input type="password" placeholder="password confirmataion" name="passwordConfirmation">
        <button>Sign Up</button>
      </form>
    </div>
    `
  )
})

app.post("/", (req, res) => {
  req.on("data", data => {
    const parsed = data.toString("utf8").split("&");
    const formData = {};
    for(let pair of parsed) {
      const [key, value] = pair.split("=");
      formData[key] = value;
    }
    console.log(formData);
  })
  res.send("account created")
})

app.listen(3000, () => {
  console.log("Listening");
})
