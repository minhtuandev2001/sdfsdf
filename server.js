import express from "express"
import dotenv from "dotenv"

// config dotenv
dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world!")
})

app.listen(PORT, () => {
  console.log("Listening on port", PORT)
})

