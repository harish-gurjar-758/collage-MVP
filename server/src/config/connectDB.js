import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connect Successfully !!");
    } catch (error) {
        console.error("!! MognoDB Connect Failed : ", error.message || error);
        process.exit(1);
    }
};

export default connectDB;