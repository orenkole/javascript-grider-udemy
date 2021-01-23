const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send(
    `
      <div class="">
      <form method="POST">
        <input type="email" placeholder="email" name="email">
        <input type="password" placeholder="password" name="password">
        <input type="password" placeholder="password confirmataion" name="password confirmation">
        <button>Sign Up</button>
      </form>
    </div>
    `
  )
})

app.post("/", (req, res) => {
  res.send("account created")
})

app.listen(3000, () => {
  console.log("Listening");
})
