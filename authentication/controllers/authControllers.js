import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

const loginUser = async (request, response) => {
    
};

const registerUser = async (request, response) => {
    const { body } = request
    

    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(body.password, salt)

        const newUser = new User({
            ...body, 
            password: hashedPassword, 
        });

        const registeredUser = await newUser.save();
        return response.status(201).send(registerUser)
    } catch (error) {
        
    }
};

export { loginUser };