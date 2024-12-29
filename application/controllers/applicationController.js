const handleErrors = (error) => {
    console.log(error.message, error.code)
    const errors = { email: ''}

    if(error.message === 'Incorrect username') {
        error.username = 'Incorrect username'
    }

    if(error.message === 'Incorrect password') {
        error.username = 'Incorrect password'
    }

    if(error.code === 11000){
        errors.email = "Username is taken"
        return errors;
    }
    
    if(console.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({ properties}) => {
            errors[properties] = properties.message;
        })
    }

    return errors;
}

const applyToJob = async (request, response) => {
    const { jobId } = request.params;
    const { userId } = request.body;

    const jobApplication = {
        jobId,
        userId,
        status: 'Pending'
    };

    try {
        const result = await db.query('INSERT INTO qpplications SET ?', jobApplication);
        response.status(201).json(result);
    } catch (error) {
        const errors = handleErrors(error);
        response.status(400).json({ errors });
    }
};

export { applyToJob };