const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

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
  console.log(req.body);
  res.send("account created")
})

app.listen(3000, () => {
  console.log("Listening");
})
