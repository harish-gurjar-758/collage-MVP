import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    departName: { type: String, required: true },
    subjects: [
        {}
    ]
});

const Department = mongoose("Departments", departmentSchema);
export default Department;