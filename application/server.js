import express from 'express';
import mysql2 from 'mysql2';
import applicationRoutes from './routes/applicationRoutes.js';

const app = express();
const port = 3000;

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobapplication'
});

app.use(async (request, response, next) => {
    try {
        const connection = await pool.promise().getConnection();
        request.db = connection;
        response.on('finish', () => {
            if (request.db) request.db.release();
        });
        next();
    } catch (error) {
        console.error('Error getting database connection:', error);
        response.status(500).send('Internal Server Error');
    }
});

app.use(express.json());
app.use('/applications', applicationRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});