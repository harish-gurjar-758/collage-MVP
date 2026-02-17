import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true,
    },
});

const classSchema = new mongoose.Schema({
    semester: {
        type: Number,
        required: true,
    },
    subjects: [subjectSchema],
});

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
    },
    classes: [classSchema],
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
