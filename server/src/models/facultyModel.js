import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        employeeId: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true
        },

        designation: {
            type: String,
            required: true
        },

        qualification: String,

        experience: Number,

        salary: Number,

        joiningDate: {
            type: Date,
            default: Date.now
        },

        subjects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject"
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);