import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/config/db.js"

// config dotenv
dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors({
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  credentials: true
}));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world!!!!!!!")
})

app.listen(PORT, () => {
  console.log("Listening on port", PORT)
})

