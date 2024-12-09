import User from '../models/User';

const maxAge = 3 * 24 * 60 * 60;

const handleErrors = (error) => {
    console.log(error.message, error.code)
    const errors = { email: ''}

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

const createToken = (id) => {
    return jwt.sign({ id }, 'SECRET_API', {
        expiresIn: maxAge
    })
}

const loginUser = async (request, response) => {
    
};

const registerUser = async (request, response) => {
    const { body } = request
    
    try {
        const registeredUser = await User.create(body);
        const token = createToken(registeredUser._id)
        response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
        return response.status(201).send({user: registerUser._id})
    } catch (error) {
        const errors = handleErrors(error)
        return response.status(400).json({ errors })
    }
};

export { loginUser };