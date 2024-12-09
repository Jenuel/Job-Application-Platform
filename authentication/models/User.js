import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema =  mongoose.Schema;

const newUserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your First Name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your Last Name']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    userType: {
        type: String,
        required: true
    }
});

newUserSchema.pre('save', async function (doc, next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

const User = mongoose.model('User', newUserSchema);

export default User;