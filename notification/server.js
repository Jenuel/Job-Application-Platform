import express from "express";
import http from "http";
import cors from "cors";
import mysql from "mysql2/promise";
import { setupSocket } from "./socket";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json()); 
app.use("/notifications", notificationRoutes);

const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
})

setupSocket(server, pool);

const PORT = 6000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
