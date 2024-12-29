import express from 'express';
import mysql2 from 'mysql2';
import applicationRoutes from './routes/applicationRoutes';

const app = express();
const port = 3000;

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobapplication'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.use(express.json());
app.use('/applications', applicationRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});