import express from "express";

const app = express(); // ham express ka object bana rahe hai jisko naam app de rahe hai.

//app.get(path, callback Function)

app.get("/", (req, res) => {
  console.log("Server Connceted");
 res.json({ message: "Hello, I am Backend!" });
});

app.listen(3012, () => {
  console.log("http://localhost:3012");

});