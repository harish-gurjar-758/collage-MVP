import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        LastName: {
            type: String,
            required: true,
        }
    },
    userRole: {
        type: String,
        enum: "student, teacher, gest, management"
    },
    contact: {
        email: { type: String },
        phone: { type: Number },
        address: { type: String }
    },

});

const User = mongoose("Users", userSchema);
export default User;