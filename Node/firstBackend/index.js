import express from "express";

const app = express(); // ham express ka object bana rahe hai jisko naam app de rahe hai.


app.get("/", (req, res) => {
    console.log("Server Connceted")
     res.json({ message: "Hello, I am Backend!"});
})


app.listen(3000, () => {
    console.log("Server Started")

}) 