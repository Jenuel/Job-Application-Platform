import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()

app.use(express.json())

//routes
app.use("/auth", authRoutes)

//database connection
mongoose.connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port,", process.env.PORT || 4000)
    })
  })