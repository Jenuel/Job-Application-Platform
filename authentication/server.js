import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

mongoose.connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port,", process.env.PORT || 4000)
    })
  })