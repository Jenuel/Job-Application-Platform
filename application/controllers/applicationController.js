const getApplications = async (request, response) => {
    const db = request.db;

    try {
        const [rows] = await db.query('SELECT * FROM applications');
        response.status(200).json(rows); // Send only the data
    } catch (error) {
        console.error('Error fetching applications:', error);
        response.status(500).json({ error: error.message });
    }
};


const getApplication = async (request, response) => {
    const db = request.db;
    const { appId } = request.params;

    try {
        const [rows] = await db.query('SELECT * FROM applications WHERE application_id = ?', appId);
        response.status(200).json(rows);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

const applyToJob = async (request, response) => {
    const db = request.db;
    const { jobId } = request.params;
    const { userId } = request.body;

    const jobApplication = {
        talent_id: userId,
        job_id: jobId,
        status: 'Pending'
    };

    try {
        const result = await db.query('INSERT INTO applications SET ?', jobApplication);
        response.status(201).json(result);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

const updateApplication = async (request, response) => {
    const db = request.db;
    const { appId } = request.params;
    const { status } = request.body;

    try {
        const [rows] = await db.query('UPDATE applications SET status = ? WHERE application_id = ?', [status, appId]);
        response.status(200).json(rows);
    } catch (error) {
        response.status(400).json({ error: error.message });  
    }
};


export { getApplications, getApplication, applyToJob, updateApplication };