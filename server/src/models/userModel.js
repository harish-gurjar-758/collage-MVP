import mongoose from "mongoose";
import { type } from "node:os";
import Department from "./departmentModel";


const userSchema = mongoose.Schema({
    fullName: [
        {
            firstName: {
                type: String,
                required: true,
            },
            LastName: {
                type: String,
                required: true,
            }
        }
    ],
    userRole: {
        type: String,
        enum: "student, teacher, gest, management"
    },
    contact: [{
        email: { type: String },
        phone: { type: Number },
        address: { type: String }
    }],
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    department: {Department},
});

const User = mongoose("Users", userSchema);
export default User;